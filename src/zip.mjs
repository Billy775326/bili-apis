import fs from "node:fs";
import { createHash } from "node:crypto";
import { createInflateRaw, inflateRawSync } from "node:zlib";

const CRC_TABLE = Uint32Array.from({ length: 256 }, (_, value) => {
  for (let bit = 0; bit < 8; bit++)
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  return value >>> 0;
});
export function crc32(bytes, state = 0xffffffff) {
  for (const byte of bytes)
    state = CRC_TABLE[(state ^ byte) & 255] ^ (state >>> 8);
  return state >>> 0;
}
export class ZipReader {
  constructor(filename) {
    this.filename = filename;
    this.fd = fs.openSync(filename, "r");
    this.size = fs.fstatSync(this.fd).size;
    try {
      this.entries = this.directory();
    } catch (error) {
      this.close();
      throw error;
    }
  }
  close() {
    if (this.fd !== undefined) {
      fs.closeSync(this.fd);
      this.fd = undefined;
    }
  }
  read(offset, length) {
    if (
      !Number.isSafeInteger(offset) ||
      !Number.isSafeInteger(length) ||
      offset < 0 ||
      length < 0 ||
      offset + length > this.size
    )
      throw Error("ZIP read outside file");
    const result = Buffer.alloc(length);
    if (fs.readSync(this.fd, result, 0, length, offset) !== length)
      throw Error("Truncated ZIP read");
    return result;
  }
  directory() {
    const tail = this.read(
      Math.max(0, this.size - 65557),
      Math.min(this.size, 65557),
    );
    let end = -1;
    for (let p = tail.length - 22; p >= 0; p--) {
      if (
        tail.readUInt32LE(p) === 0x06054b50 &&
        p + 22 + tail.readUInt16LE(p + 20) === tail.length
      ) {
        end = p;
        break;
      }
    }
    if (end < 0) throw Error("ZIP end directory not found");
    if (tail.readUInt16LE(end + 4) || tail.readUInt16LE(end + 6))
      throw Error("Multi-disk ZIP unsupported");
    const count = tail.readUInt16LE(end + 10),
      size = tail.readUInt32LE(end + 12),
      offset = tail.readUInt32LE(end + 16);
    if (count === 65535 || size === 0xffffffff || offset === 0xffffffff)
      throw Error("ZIP64 unsupported");
    if (count !== tail.readUInt16LE(end + 8))
      throw Error("ZIP directory count mismatch");
    if (size > 32 * 1024 * 1024)
      throw Error("ZIP directory exceeds 32 MiB budget");
    const endOffset = this.size - tail.length + end;
    if (offset + size > endOffset)
      throw Error("ZIP directory overlaps trailer");
    this.directoryOffset = offset;
    const central = this.read(offset, size),
      entries = [];
    let p = 0;
    for (let index = 0; index < count; index++) {
      if (p + 46 > central.length || central.readUInt32LE(p) !== 0x02014b50)
        throw Error("Malformed ZIP central entry");
      const flags = central.readUInt16LE(p + 8),
        method = central.readUInt16LE(p + 10);
      const nameLength = central.readUInt16LE(p + 28),
        extraLength = central.readUInt16LE(p + 30),
        commentLength = central.readUInt16LE(p + 32);
      const next = p + 46 + nameLength + extraLength + commentLength;
      if (next > central.length) throw Error("Truncated ZIP central name");
      const nameBytes = Buffer.from(
        central.subarray(p + 46, p + 46 + nameLength),
      );
      const name = nameBytes.toString("utf8");
      const entry = {
        index,
        name,
        nameBytes,
        flags,
        method,
        crc32: central.readUInt32LE(p + 16),
        compressedSize: central.readUInt32LE(p + 20),
        size: central.readUInt32LE(p + 24),
        localOffset: central.readUInt32LE(p + 42),
      };
      if (
        [entry.compressedSize, entry.size, entry.localOffset].includes(
          0xffffffff,
        )
      )
        throw Error("ZIP64 member unsupported");
      entries.push(entry);
      p = next;
    }
    if (p !== central.length)
      throw Error("Trailing central directory bytes unsupported");
    return entries;
  }
  locate(entry) {
    const header = this.read(entry.localOffset, 30);
    if (header.readUInt32LE(0) !== 0x04034b50)
      throw Error("Invalid ZIP local header");
    if (entry.flags & 1 || header.readUInt16LE(6) & 1)
      throw Error("Encrypted ZIP member unsupported");
    if (header.readUInt16LE(8) !== entry.method)
      throw Error("ZIP local compression mismatch");
    const length = header.readUInt16LE(26),
      extra = header.readUInt16LE(28);
    if (!this.read(entry.localOffset + 30, length).equals(entry.nameBytes))
      throw Error("ZIP local name mismatch");
    const offset = entry.localOffset + 30 + length + extra;
    if (offset + entry.compressedSize > this.directoryOffset)
      throw Error("ZIP member overlaps directory");
    if (![0, 8].includes(entry.method))
      throw Error("ZIP compression method unsupported: " + entry.method);
    return offset;
  }
  readEntry(entry, maxBytes = 8 * 1024 * 1024) {
    if (entry.size > maxBytes || entry.compressedSize > maxBytes)
      throw Error("ZIP member exceeds read budget");
    const offset = this.locate(entry),
      encoded = this.read(offset, entry.compressedSize);
    const bytes =
      entry.method === 0
        ? encoded
        : inflateRawSync(encoded, { maxOutputLength: maxBytes });
    if (
      bytes.length !== entry.size ||
      (crc32(bytes) ^ 0xffffffff) >>> 0 !== entry.crc32
    )
      throw Error("ZIP member size/CRC mismatch");
    return bytes;
  }
  async hashEntry(entry) {
    const dataOffset = this.locate(entry),
      hash = createHash("sha256");
    let size = 0,
      crc = 0xffffffff;
    if (entry.compressedSize) {
      const input = fs.createReadStream(this.filename, {
        start: dataOffset,
        end: dataOffset + entry.compressedSize - 1,
        highWaterMark: 256 * 1024,
      });
      const output =
        entry.method === 8 ? input.pipe(createInflateRaw()) : input;
      if (output !== input) input.on("error", (error) => output.destroy(error));
      try {
        for await (const chunk of output) {
          size += chunk.length;
          if (size > entry.size)
            throw Error("ZIP inflated size exceeds declaration");
          hash.update(chunk);
          crc = crc32(chunk, crc);
        }
      } finally {
        input.destroy();
        output.destroy();
      }
    }
    if (size !== entry.size || (crc ^ 0xffffffff) >>> 0 !== entry.crc32)
      throw Error("ZIP member size/CRC mismatch: " + entry.name);
    return { sha256: hash.digest("hex"), dataOffset };
  }
}

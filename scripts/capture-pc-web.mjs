import path from 'node:path';
import {capturePcPages} from '../src/pc-capture.mjs';
const args=process.argv.slice(2),options={};for(let i=0;i<args.length;i+=2){if(!['--chrome','--output'].includes(args[i])||!args[i+1])throw Error('Use --chrome PATH --output DIRECTORY');options[args[i].slice(2)]=args[i+1];}
if(!options.chrome||!options.output)throw Error('Both --chrome and --output are required');
const output=path.resolve(options.output);const local=path.resolve('.local')+path.sep;if(!output.startsWith(local))throw Error('Raw captures and browser profile must remain under the ignored .local directory');
const report=await capturePcPages({chromePath:options.chrome,outputDir:output,onProgress:p=>console.log(JSON.stringify(p))});
console.log(JSON.stringify({output,observations:report.observations.length,assets:report.assets.length,diagnostics:report.diagnostics.length}));

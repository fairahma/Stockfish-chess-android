import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('node_modules/stockfish');
const dest=path.resolve('public/engine');
if(!fs.existsSync(root)) {console.error('Stockfish is not installed. Run npm install.');process.exit(1)}
const files=[];
function walk(p){for(const item of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,item.name);if(item.isDirectory())walk(f);else files.push(f)}}
walk(root);
const js=files.find(f=>/stockfish.*lite.*single.*\.js$/i.test(path.basename(f))) || files.find(f=>/stockfish.*single.*\.js$/i.test(path.basename(f)));
if(!js){console.error('Could not locate a Stockfish single-thread engine in npm package. Files:',files.filter(x=>x.endsWith('.js')).slice(0,30));process.exit(1)}
fs.mkdirSync(dest,{recursive:true});
for(const file of fs.readdirSync(path.dirname(js))){if(/\.(js|wasm|nnue)$/i.test(file)){fs.copyFileSync(path.join(path.dirname(js),file),path.join(dest,file))}}
fs.writeFileSync(path.join(dest,'engine.json'),JSON.stringify({file:path.basename(js)}));
console.log('Stockfish copied:',path.basename(js));

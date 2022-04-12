import { CONST } from "./bin/index.mjs";
import path from 'path'
function log(){
  console.log('this is ' + path.resolve('src/node/index.mjs', CONST));
}
export {
  log
}
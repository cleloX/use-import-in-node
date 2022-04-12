import { CONST } from "./bin";
import path from 'path'
function log(){
  console.log('this is' + path.resolve(__filename, CONST));
}


exports.log = log
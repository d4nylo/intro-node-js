const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.normalize('./file.txt'), { encoding: 'utf-8' }).toString();

console.log(file); 

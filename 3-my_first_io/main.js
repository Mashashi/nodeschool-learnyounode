debugger;
var fs = require('fs');
var file = process.argv[2];
var /*Buffer*/ b = fs.readFileSync(file);
console.log(b.toString().split('\n').length-1);
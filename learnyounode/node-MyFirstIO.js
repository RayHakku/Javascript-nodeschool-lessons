const fs = require('fs')

var link = fs.readFileSync(process.argv[2])

console.log(link.toString().split('\n').length - 1)
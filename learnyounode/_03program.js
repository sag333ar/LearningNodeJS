var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

var string = buffer.toString()

var count = string.split('\n').length - 1

console.log(count)

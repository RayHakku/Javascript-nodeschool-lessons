const { trace } = require('console')
var fs = require('fs')

var peach = function (obj) {
    console.trace('traced')
    console.log(obj)
}

var bowser = function (callback) {
    fs.readFile(process.argv[2], { encodinig: 'utf-8' }, callback)
}

var koopa = function (err, file) {
    if (err) {
        console.error(err)
        return
    }
    peach(JSON.parse(file))
}

bowser(koopa)
const { match } = require('assert')
var fs = require('fs')

function readDir(dirName, ext, callback) {
    fs.readdir(dirName, function (er, List) {
        if (er) {
            callback(er)
        } else {
            var matchList = []
            for (var i = 0; i < List.length; i++) {
                if (List[i].split('.')[1] == ext) {
                    matchList.push(List[i])
                }
            }
            callback(null, matchList)
        }
    })
}

module.exports = readDir
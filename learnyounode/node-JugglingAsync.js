var http = require('http')
var stringArray = ['', '', '']
var completo = [false, false, false]

function httpGet(iex) {
    http.get(process.argv[2 + iex], function (resposta) {
        resposta.on('data', function (data) {
            stringArray[iex] = stringArray[iex] + data.toString()
        })
        resposta.on('end', function () {
            completo[iex] = true
            printStrings()
        })
    })
}

function printStrings() {
    if (completo[0] && completo[1] && completo[2]) {
        for (var i = 0; i < 3; i++) {
            console.log(stringArray[i])
        }
    }
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
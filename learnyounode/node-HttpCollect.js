var http = require('http')
var string = ''

http.get(process.argv[2], function (resposta) {
    resposta.on('data', function (data) {
        string = string + data.toString()
    })
    resposta.on('end', function () {
        console.log(string.length)
        console.log(string)
    })
})
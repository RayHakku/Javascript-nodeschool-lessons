var http = require('http')

http.get(process.argv[2], function (resposta) {
    resposta.on('data', function (data) {
        console.log(data.toString())
    })
})
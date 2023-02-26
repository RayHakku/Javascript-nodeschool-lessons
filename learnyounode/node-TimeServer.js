var net = require('net')
var server = net.createServer(function (socket) {
    function numeroParaString(number) {
        if (number < 10) {
            return '0' + number.toString()
        }
        else {
            return number.toString()
        }
    }
    var data = new Date()
    var ano = numeroParaString(data.getFullYear())
    var mes = numeroParaString((data.getMonth() + 1))
    var dia = numeroParaString(data.getDate())
    var hora = numeroParaString(data.getHours())
    var minuto = numeroParaString(data.getMinutes())
    socket.end(ano + '-' + mes + '-' + dia + ' ' + hora + ':' + minuto + '\n')
})

server.listen(parseInt(process.argv[2]))


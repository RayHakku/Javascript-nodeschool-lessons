var http = require('http')
var url = require('url')

var routes = {
    '/api/parsetime': function (query) {
        var data = new Date(query.iso)
        return {
            hour: data.getHours(),
            minute: data.getMinutes(),
            second: data.getSeconds()
        }
    },
    '/api/unixtime': function (query) {
        var data = new Date(query.iso)
        return { unixtime: data.getTime() }
    }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var resource = routes[parsedUrl.pathname]
    if (resource) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(resource(parsedUrl.query)))
    } else {
        res.writeHead(404)
        res.end
    }
})

server.listen(process.argv[2])
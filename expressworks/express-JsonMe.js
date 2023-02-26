var fs = require('fs')
var express = require('express')
var app = express()

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, content) {
        if (err) {
            res.sendStatus(500)
        } else {
            try {
                var books = JSON.parse(content.toString())
                res.json(books)
            } catch {
                res.sendStatus(500)
            }
        }
    })
})

app.listen(process.argv[2])
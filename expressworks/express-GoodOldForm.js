// Instalar Body-Parser Modulo -> npm install body-parser

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/form', function (req, res) {
    console.log(req.body)
    res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
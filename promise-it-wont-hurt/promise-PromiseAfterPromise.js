var primeiraPro = first()

var segundaPro = primeiraPro.then(function (valor) {
    return second(valor)
})

segundaPro.then(console.log)

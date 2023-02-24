var soma = 0

for (var i = 0; i < process.argv.length; i++) {
    if (i >= 2) {
        soma = soma + Number(process.argv[i])
    }
}
console.log(soma)
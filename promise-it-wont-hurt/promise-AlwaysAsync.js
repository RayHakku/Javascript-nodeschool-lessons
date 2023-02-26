var promise = new Promise(function (fufill, reject) {
    fufill('PROMISE VALUE')
})

promise.then(console.log)

console.log('MAIN PROGRAM')
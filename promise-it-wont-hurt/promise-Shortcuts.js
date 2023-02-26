var promise;

promise = Promise.resolve('TESTANDO')

promise.catch(function (err) {
    console.log(err.message)
})
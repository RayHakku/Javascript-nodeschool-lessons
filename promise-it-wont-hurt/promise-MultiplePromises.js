function all(p1, p2) {
    return new Promise(function (fulfill, reject) {
        var counter = 0
        var out = []

        p1.then(function (val) {
            out[0] = val
            counter++

            if (counter >= 2) {
                fulfill(out)
            }
        })
        p2.then(function (val) {
            out[1] = val
            counter++
            if (counter >= 2) {
                fulfill(out)
            }
        })
    })
}
all(getPromise1(), getPromise2()).then(console.log)

function attachTitle(name) {
    return 'DR. ' + name
}

var a = Promise.resolve('MANHATTAN')

a.then(attachTitle).then(console.log)
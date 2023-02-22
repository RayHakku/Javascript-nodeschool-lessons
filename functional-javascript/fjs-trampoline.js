function repeat(operation, num) {
    if (num <= 0) {
        return
    } else {
        return function () {
            operation()
            return repeat(operation, --num)
        }
    }
}

function trampoline(fn) {
    var prox = fn
    while (prox) {
        prox = prox()
    }
}

module.exports = function (operation, num) {
    trampoline(function () {
        return repeat(operation, num)
    })
}
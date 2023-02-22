function curryN(fn, n) {
    if (typeof n !== 'number') {
        n = fn.length
    }
    function genCurry(prev) {
        return function (agr) {
            var agrs = prev.concat(agr)
            if (agrs.length < n) {
                return genCurry(agrs)
            }
            return fn.apply(this, agrs)
        }
    }
    return genCurry([])
}

module.exports = curryN
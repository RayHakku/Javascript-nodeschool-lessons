var inputs = process.argv.slice(2)
var res = inputs.map((word) => word.charAt(0))
    .reduce((val, curr) => val + curr)
console.log(res)

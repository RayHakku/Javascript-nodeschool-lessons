const max = process.argv[2];

var FizzBuzz = function* () {
    let i = 0, value
    while (i++ < max) {
        if (i % 15 == 0) {
            value = 'FizzBuzz'
        } else if (i % 3 == 0) {
            value = 'Fizz'
        } else if (i % 5 == 0) {
            value = 'Buzz'
        } else {
            value = i
        }
        yield value
    }
}()

for (var n of FizzBuzz) {
    console.log(n)
}
const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let i = 0
        return {
            next() {
                i++
                let value = i % 15 === 0 ? 'FizzBuzz' :
                    i % 3 === 0 ? 'Fizz' :
                        i % 5 === 0 ? 'Buzz' : i
                if (i <= max) {
                    return { done: false, value }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
for (let n of FizzBuzz) {
    console.log(n)
}
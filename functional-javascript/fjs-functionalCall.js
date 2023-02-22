// o valor 'This' na Function.call e a funcao que vai ser executada
// Bind retorna uma nova funcao com valor de 'this' 
// com o valor do primeiro argumento
// function.prototype.call = function.call

module.exports = Function.call.bind(Array.prototype.slice);
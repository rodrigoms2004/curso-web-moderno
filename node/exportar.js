console.log(module.exports)
console.log(module.exports === this)        // true
console.log(module.exports == exports)      // true

this.a = 1
exports.b = 2;
module.exports.c = 3

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }

exports = {         // não usar!!!!
    nome: 'Teste'
}

console.log(module.exports) // { a: 1, b: 2, c: 3 }

module.exports = { publico: true }


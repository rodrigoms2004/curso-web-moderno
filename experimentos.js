let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)                          // 3
console.log(global.b)                   // 123
console.log(this.c)                     // 456
console.log(module.exports.c)           // 456
console.log(module.exports === this)    // true

// criando uma variavel maluca: sem var ou let!
abc = 3 // não faça isso em casa !!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}


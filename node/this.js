console.log(this === global)    // false
console.log(this === module)    // false

console.log(this === module.exports)    // true
console.log(this === exports)           // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)           // false
    console.log(this === module.exports)    // false
    console.log(this === global)            // true

    this.perigo = '...'     // escopo global, cuidado!
    console.log(perigo)
}

// this dentro de uma função aponta para global,
// enquanto fora de uma função aponta para exports 
// que é igual a module.exports

logThis()   // false
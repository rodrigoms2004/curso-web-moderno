const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))    // {"a":1,"b":2,"c":3}

// SyntaxError: Unexpected token a in JSON at position 2
// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) 
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

// https://json5.org/ iniciativa de evoluir formato JSON, não oficial
// https://jsonlint.com/ site para testar

/*
    Objeto para JSON => JSON.stringfy(obj)
    JSON para Objeto => JSON.parse(JSON)
*/
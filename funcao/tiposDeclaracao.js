console.log(soma(3, 4))

// console.log(sub(3, 4)) // ReferenceError: sub is not defined
// console.log(mult(3, 4)) // ReferenceError: mult is not defined

// function declaration, interpretador do javascript carrega funções antes
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression, aparece no debug stack trace
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
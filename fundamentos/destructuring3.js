// passar um objeto para a função
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))              // entre 40 e 50
console.log(rand({ min: 955 }))     // entre 955 e 1000 (valor padrão)
console.log(rand({}))               // entre 0 e 1000 (valores padrão)
// console.log(rand())              // TypeError: Cannot destructure property `min` of 'undefined' or 'null'.


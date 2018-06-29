const nums = [1, 2, 3, 4, 5]

// For com propósito, retorna um novo array
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado, nums)  // [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)  // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

resultado = nums.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado)  // [ 'R$ 13,00', 'R$ 16,00', 'R$ 19,00', 'R$ 22,00', 'R$ 25,00' ]

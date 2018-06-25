let valor                   // não inicializada
console.log(valor)          // undefined
// console.log(valor2)      // ReferenceError: valor2 is not defined

valor = null                // ausência de valor
console.log(valor)
// console.log(valor.toString())   // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)      // undefined
console.log(produto)            // {}

produto.preco = 3.50
console.log(produto)            // { preco: 3.5 }
console.log(produto.preco)      // 3.50

produto.preco = undefined       // evite atribuir undefined
console.log(!!produto.preço)    // false
console.log(produto)            // { preco: undefined }
delete produto.preco
console.log(produto)            // {}

produto.preco = null            // sem preço
console.log(!!produto.preco)    // false
console.log(produto)            // { preco: null }



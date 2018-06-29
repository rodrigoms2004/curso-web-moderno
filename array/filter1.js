const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 2400
    // return true // retorna tudo
    // return false // retorna nada
}))

// Desafio, solução do professor
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))


// Desafio, retornar produtos frageis e acima de 500 reais
// const produtosFrageis = produto => produto.fragil ? true : false  
// const produtosCaros = produto => produto.preco > 500 ? true : false
// const resultado = produtos.filter(produtosFrageis).filter(produtosCaros)
// console.log(resultado)


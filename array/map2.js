const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
// desafio concluido
// let resultado = carrinho.map( e => {
//     return JSON.parse(e).preco
// })
// console.log(resultado)   // [ 3.45, 13.9, 41.22, 7.5 ]

// solução do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)  // [ 3.45, 13.9, 41.22, 7.5 ]



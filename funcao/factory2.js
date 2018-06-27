function criarProduto(nome, preco) {
    let desconto = 0.30
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('Notebook', 1199.49))
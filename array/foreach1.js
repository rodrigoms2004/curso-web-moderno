const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


// a função callback forEach pode receber três parametros:
// o valor, o indice e o array
aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)  // imprime o array
    console.log(x)      // undefined, porque não existe quarto parametro
})

aprovados.forEach(nome =>  console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

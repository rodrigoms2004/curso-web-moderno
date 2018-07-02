const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais == "China"
const mulheres = f => f.genero == "M"
const menorSalario = (func, funcAtual) => {  // acumulador, valor
    return func.salario < funcAtual.salario ? func: funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})

// { id: 405,
//     nome: 'Jeffry',
//     sobrenome: 'Carmen',
//     email: 'jcarmenb8@google.com.hk',
//     genero: 'M',
//     cidade: 'Suocheng',
//     pais: 'China',
//     empresa: 'Gabtype',
//     salario: 1796.28 }
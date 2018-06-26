// novo recurso no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// tire de dentro do obj pessoa os atributos nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)                // Ana 5

const { nome: n, idade: i} = pessoa
console.log(n, i)                       // Ana 5

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)     // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)    // Rua ABC 1000 undefined

// const { conta: { ag, num } } = pessoa // TypeError: Cannot destructure property `ag` of 'undefined' or 'null'
// console.log(ag, num)    



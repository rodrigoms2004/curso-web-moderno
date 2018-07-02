const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)        // Fala Pessoal
console.log(moduloA.bemVindo)   // Bem vindo ao node!
console.log(moduloA.ateLogo)    // Até o próximo exemplo
console.log(moduloA)            // retorna o objeto abaixo:
                                // { ola: 'Fala Pessoal',
                                //   bemVindo: 'Bem vindo ao node!',
                                //   ateLogo: 'Até o próximo exemplo' }

console.log(moduloB.bomDia)     // bom dia
console.log(moduloB.boaNoite()) // boa noite
console.log(moduloB)    // retorna o objeto abaixo 
                        // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
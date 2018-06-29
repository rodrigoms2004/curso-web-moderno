const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()           // Massa quebrou o carro, remove ultimo elemento da lista
console.log(pilotos)    // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')  // adiciona novo elemento no final da lista
console.log(pilotos)        // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift()         // remove o primeiro elemento!
console.log(pilotos)    // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona Hamilton no inicio da lista
console.log(pilotos)        // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// adicionar Bottas e Massa no indice dois sem remover ninguém
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)    // [ 'Hamilton','Alonso','Bottas','Massa','Raikkonen','Verstappen' ]

// remover 1 elemento a partir do indice 3
pilotos.splice(3,1)     // massa quebrou :(
console.log(pilotos)    // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2)  // novo array a partir do indice 2
console.log(algunsPilotos1)              // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2  = pilotos.slice(1, 4) // novo array de 1 até 3 (não o 4!)
console.log(algunsPilotos2)                 // [ 'Alonso', 'Bottas', 'Raikkonen' ]

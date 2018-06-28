console.log(typeof Array, typeof new Array, typeof [])
         // function      object            object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])   // Bia
console.log(aprovados[1])   // Carlos
console.log(aprovados[2])   // Ana
console.log(aprovados[3])   // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // true

console.log(aprovados)
// [ 'Bia','Carlos','Ana','Paulo','Abia',<4 empty items>,'Rafael' ]

aprovados.sort()
console.log(aprovados)
// [ 'Abia','Ana','Bia','Carlos','Paulo','Rafael',<4 empty items> ]

delete aprovados[1]
console.log(aprovados[1])   // undefined
console.log(aprovados[2])   // Bia

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')  // exclui a partir do indice 1 até o indice 2,
                                            // adicionando mais dois elementos. 
                                            // Se colocar 0 em vez de 2 não exclui nada,
                                            // resultando em:
                                            // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]

console.log(aprovados)  // [ 'Bia', 'Elemento1', 'Elemento2' ]



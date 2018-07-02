// iterando uma string
for (let letra of "Cod3r") {
    console.log(letra)
}
// C
// o
// d
// 3
// r

// para iterar um array era necessário usar o indice...
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)  
    // console.log(assuntosEcma[i])
}
// 0
// 1
// 2
// .. com For Of a iteração é direto no valor
for (let assunto of assuntosEcma) {
    console.log(assunto)
}
// Map
// Set
// Promise

// iterando um map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// imprime chaves e valores
for (let assunto of assuntosMap) {
    console.log(assunto)
}
// [ 'Map', { abordado: true } ]
// [ 'Set', { abordado: true } ]
// [ 'Promise', { abordado: false } ]

// imprime somente as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// imprime somente os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
// { abordado: true }
// { abordado: true }
// { abordado: false }

for (let [ch, vl] of assuntosMap.entries()) {   // desestruturando chave valor
    console.log(ch, vl)
}   
// Map { abordado: true }
// Set { abordado: true }
// Promise { abordado: false }

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
// a
// b
// c

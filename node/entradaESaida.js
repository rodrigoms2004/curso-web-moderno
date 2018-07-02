const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)
// node entradaESaida.js -a // true
// node entradaESaida.js -b // false
// node entradaESaida.js    // false

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {                  // quando o usuário tecla enter
        const nome = data.toString().replace('\n', '')  // remove \n do enter
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}

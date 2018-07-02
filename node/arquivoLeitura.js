const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sicrono...   travando o eventloop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.log(err)
    } else {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

// acesso direto ao arquivo json
const config = require('./arquivo.json')    // precisa passar a extensão .json!!!
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)   // retorna array com arquivos do diretorio
})
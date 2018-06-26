function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimitNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {                 // sempre será executado, com erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimitNomeGritado(obj)        // TypeError: Cannot read property 'toUpperCase' of undefined
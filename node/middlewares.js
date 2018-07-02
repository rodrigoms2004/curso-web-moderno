// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {     // objeto, função
    ctx.valor1 = 'mid1'
    next()   
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()       
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { // recebe objeto e array de middlewares
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&   // valida se array middlewares existe e se comprimento é menor que length
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)    // começa a partir do passo 0
}

const ctx = {}
// exec(ctx, passo1, passo2, passo3)
console.log(ctx)    // { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }

// exec(ctx, passo3, passo2, passo1)
// console.log(ctx)    // { valor3: 'mid3' }
// passo 3 não possui next


// exec(ctx, passo2, passo1, passo3)
// console.log(ctx)    // { valor2: 'mid2', valor1: 'mid1', valor3: 'mid3' }

// exec(ctx, passo1, passo3)
// console.log(ctx)    // { valor1: 'mid1', valor3: 'mid3' }

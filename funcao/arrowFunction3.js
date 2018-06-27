let comparaComThis = function (param) {
    console.log(this === param)
}
// no browser usar: comparaComThis(window)
comparaComThis(global)  // true
// comparaComThis(this)    // false

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this agora aponta para obj e não para global
comparaComThis(global)  // false
comparaComThis(obj)  // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports)   // true
// comparaComThisArrow(this)   // true

// arrow function vence bind, continua apontando para o contexto 
// onde a arrow function foi escrita
// e não para o contexto para o objeto obj
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)            // false
comparaComThisArrow(module.exports) // true


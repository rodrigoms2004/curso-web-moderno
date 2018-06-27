
// Criando uma constante self de this, para evitar que this mude de contexto
// usando self dentro do contexto da função anônima executada pelo método 
// setInterval a cada 1 segundo
function Pessoa() {
    this.idade = 0

    const self = this               // cria contante para evitar que this mude
    setInterval(function() {        // executa função anonima a cada 1 segundo
        self.idade++
        console.log(self.idade)
    }, 1000)            // associa o this a Pessoa
}

new Pessoa


// // Usando bind para associar this a função anônima executada
// // pelo método setInterval a cada 1 segundo
// function Pessoa() {
//     this.idade = 0
    
//     setInterval(function() {        // executa função anonima a cada 1 segundo
//         this.idade++             // usa this da função anonima
//         console.log(this.idade)
//     }.bind(this), 1000)            // associa o this a Pessoa
// }

// new Pessoa
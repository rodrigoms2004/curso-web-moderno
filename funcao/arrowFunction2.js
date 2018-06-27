function Pessoa() {
    this.idade = 0

    // usando arrow function o this não varia, se mantendo na function Pessoa()
    setInterval(() => {        
        this.idade++
        console.log(this.idade)
    }, 1000)           
}

new Pessoa

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()  // Bom dia!

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO, retorna undefined
        // this de 'falar()' não possuí propriedade 'saudacao'

// função apontando para componente 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia!

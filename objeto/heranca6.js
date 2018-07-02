function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}                  // cria objeto novo
    obj.__proto__ = f.prototype     // associa o prototipo do objeto 
                                    // ao atributo prototype da função passada no parametro
    f.apply(obj, params)            // executa a função f passando como objeto de contexto (this) o
                                    // o objeto criado obj
    return obj                      // retorna objeto criado
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Bem vindo', 123)
console.log(aula3, aula4)
// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'    // não faça isso em casa!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)    // procura no filho, depois no pai e acha no avô
console.log(filho.attr0)    // procura no filho, depois no pai, depois no avô 
                            // e acha no Object.prototype

console.log(filho.attr0, 
            filho.attr1, 
            filho.attr2, 
            filho.attr3) // attr3 = 'C' do filho sombreou o attr3='3' do pai

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324    // shadowing, sombreia a velMax do objeto carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)   // ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)     // volvo tem carro como seu prototipo

console.log(ferrari)    // { modelo: 'F40', velMax: 324 }
console.log(volvo)      // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
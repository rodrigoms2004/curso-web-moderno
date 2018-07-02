// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)  // { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafela']   // espalha elementos do array grupoA no array grupoFinal
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafela' ]
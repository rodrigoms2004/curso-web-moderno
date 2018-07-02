const schedule = require('node-schedule')

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
 */
// executa tarefa numa segunda-feira(1) em qualquer dia do mês(*), em qualquer mês(*)
// a 1 hora, em qualquer minuto(*) a cada 5 segundos (*/5)
const tarefa1 = schedule.scheduleJob('*/5 * 1 * *  1', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)   // cancela tarefa1 após 20 segundos

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]    // executa de segunda(1) a sexta(5)
regra.hour = 1                                  // executa a 1 da manhã
regra.second = 30                               // no segundo 30, 01:00:30..01:17:30..01:59:30


const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

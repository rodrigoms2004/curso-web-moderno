function teste1(num) {
    if (num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)   // imprime Final
teste1(8)   // imprime 8 e Final


function teste2(num) {
    if(num > 7); {      // cuidado com o ;, não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)   // imprime 6
teste2(8)   // imprime 8
const funcs = []  // array vazio

for (let i = 0; i < 10; i++) {
    funcs.push(function() {     // função anonima
        console.log(i)
    })
}

funcs[2]()  // 2
funcs[6]()  // 6
funcs[8]()  // 8
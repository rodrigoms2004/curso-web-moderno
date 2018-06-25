const funcs = []  // array vazio

for (var i = 0; i < 10; i++) {
    funcs.push(function() {     // função anonima
        console.log(i)
    })
}

funcs[2]()  // 10
funcs[8]()  // 10
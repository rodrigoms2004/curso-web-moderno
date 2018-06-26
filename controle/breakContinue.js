const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('break')    // sai se o indice for 5
for (x in nums) {
    if (x == 5) {
        break       // break age no block for
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('continue') // pula o indice 5 e continua
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // break atua no laço externo, não no interno como o padrão
        console.log(`Par = ${a},${b}`)
    }
}

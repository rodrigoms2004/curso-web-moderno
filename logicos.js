function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2   // and
    const comprarTv50 = trabalho1 && trabalho2      // or
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)   //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2      // xor
    const manterSaudavel = !comprarSorvete          // operador unário not

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}


console.log(compras(true, true))        // and
console.log(compras(true, false))       // or
console.log(compras(false, true))       // xor
console.log(compras(false, false))      // not


/*
 
// operadores binários
v and v -> v
v and f -> f
f and v -> f

v or ? -> v
f or v -> v
f or f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

// operador unário
!v -> f
!f -> v

 */
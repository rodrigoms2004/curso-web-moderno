const escola = "Cod3r"
  // indexes   "01234"

console.log(escola.charAt(4))       // r
console.log(escola.charAt(5))       // nothing
console.log(escola.charCodeAt(3))   // ASCII code 51 = 3
console.log(escola.indexOf('d'))    // index 2

console.log(escola.substring(1))    // from index 1 to final index
console.log(escola.substring(0, 3)) // from index 0 to index 3

console.log('Escola '.concat(escola).concat("!"))   // Escola Cod3r!
console.log('Escola ' + escola + "!")               // Escola Cod3r!
console.log(escola.replace(3, 'e'))                 // Coder
console.log(escola.replace(/\d/, 'e'))              // Coder
console.log(escola.replace(/\w/g, 'e'))             // eeeee

console.log('Ana, Maria, Pedro'.split(','))         // [ 'Ana', ' Maria', ' Pedro' ]
console.log('Ana, Maria, Pedro'.split(/,/))         // [ 'Ana', ' Maria', ' Pedro' ]


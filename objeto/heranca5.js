console.log(typeof String)  // function
console.log(typeof Array)   // function
console.log(typeof Object)  // function

String.prototype.reverse = function () {
    return this.split('').reverse().join()
}
console.log('Escola Cod3r'.reverse())   // r,3,d,o,C, ,a,l,o,c,s,E

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())    // 1
console.log(['a', 'b', 'c'].first())    // a

String.prototype.toString = function() {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())   // o,d,u,t, ,u,o,c,s,a,L


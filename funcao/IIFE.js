// IIFE = Immediately Invoked Function Expression

// ajuda a fugir do escopo global, principalmente no browser
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
// returns
// Será executado na hora!
// Foge do escopo mais abrangente
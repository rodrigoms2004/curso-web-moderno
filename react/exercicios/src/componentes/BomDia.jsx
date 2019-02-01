import React from 'react'
// import React, { Fragment } from 'react'


// colocar multiplos elementos com array
// as keys servem para o react encontrat os elementos
export default props => [
        <h1 key='h1'>Bom dia {props.nome}!</h1>,
        <h2 key='h2'>Até breve! Idade: {props.idade}</h2>
]

// props = convenção
// export default props => 

//     // <div>
//     //     <h1>Bom dia {props.nome}!</h1>
//     //     <h2>Até breve!</h2>
//     // </div>

//     // React.Fragment renderiza h1 e h2 diretamente no html,
//     // sem necessidade de usar div
//     // <React.Fragment>
//     //     <h1>Bom dia {props.nome}!</h1>
//     //     <h2>Até breve!</h2>
//     // </React.Fragment>

//     // se Fragment for importado...
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>


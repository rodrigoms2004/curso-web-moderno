import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
import Multi, { BoaNoite } from './componentes/Multiplos'


ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
, document.getElementById('root'))


// ReactDOM.render(<BomDia nome="Guilherme" idade={40}/>, document.getElementById('root'))
// ou...
// ReactDOM.render(<BomDia></BomDia>, document.getElementById('root'))

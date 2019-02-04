import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))


// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))


// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'


// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))


// ReactDOM.render(<BomDia nome="Guilherme" idade={40}/>, document.getElementById('root'))
// ou...
// ReactDOM.render(<BomDia></BomDia>, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'


ReactDOM.render(<BomDia nome="Guilherme" idade={40}/>, document.getElementById('root'))

// ou...
// ReactDOM.render(<BomDia></BomDia>, document.getElementById('root'))

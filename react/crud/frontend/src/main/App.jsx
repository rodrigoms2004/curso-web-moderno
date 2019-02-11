import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

// import { HashRouter } from 'react-router-dom'
// http://localhost:3000/#/ HashRouter trabalha com #, menos problemas em produção
// BrowserRouter não usa #, mais simples, mas pode ter problemas na produção com 
// Apache ou nginX

import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>


// export default props => 
//     <HashRouter>
//         <div className="app">
//             <Logo />
//             <Nav />
//             <Routes />
//             <Footer />
//         </div>
//     </HashRouter>

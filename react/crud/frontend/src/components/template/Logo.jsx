import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>


// export default props => 
//     <aside className="logo">
//         <a href="/" className="logo">
//             <img src={logo} alt="logo"/>
//         </a>
//     </aside>
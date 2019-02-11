import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <React.Fragment>
        <Header {...props} />    {/* Propriedades recebidas em main propagadas em header*/}
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

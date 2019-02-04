import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        // using bing to bes sure about fixed this
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({tipo: e.target.value})
        // let i = 0
        // setInterval(() => {
        //     this.setState({tipo: ++i})
        // }, 1000)
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    // using binding in the constructor
                    value={tipo} onChange={this.setTipo}/>          
                <input type="text" placeholder="Nome..." 
                    // using function
                    value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}
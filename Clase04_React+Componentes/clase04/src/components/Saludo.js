import React, {Component} from 'react';
import PropTypes from 'prop-types'



// INSTALÉ : npm i --save prop-types


/* import React from 'react'; */

/*

// COMPONENTE FUNCIONAL

// Lo puedo "desestrurar", si en lugar de props, escribo ({mensaje, numero, booleano})
const Saludo = (props) =>{

    return (

    <>
        <h2>Hola {props.mensaje}, tu edad es {props.numero}, boolean: {props.booleano ? "true" : "false"}</h2>
        
        <h2>{props.array}</h2>

        <h2>{props.array.map(elemento => elemento*2)}</h2>

        <h2>{props.array.map(props.function)}</h2>

        <p>{props.componente}</p>

        <h2>{props.objeto.nombre} y {props.objeto.edad} </h2>

    </>


    )



}

*/


// COMPONENTE DE CLASE.
class Saludo extends Component{

    // Los componentes de CLASE necesitan instancia de un construcotr.
    // Y además, utilizan THIS en los props.
    constructor (props)
    {
        super(props);
    }

    render()
    {
        return(

            <>
        <h2>Hola {this.props.mensaje}, tu edad es {this.props.numero}, boolean: {this.props.booleano ? "true" : "false"}</h2>
        
        <h2>{this.props.array}</h2>

        <h2>{this.props.array.map(elemento => elemento*2)}</h2>

        <h2>{this.props.array.map(this.props.function)}</h2>

        <p>{this.props.componente}</p>

        <h2>{this.props.objeto.nombre} y {this.props.objeto.edad} </h2>

        </>


        )

    }

}

Saludo.defaultProps = {
    mensaje:"No se envio mensaje",
}


Saludo.propTypes = {
    numero : PropTypes.number,

}

export default Saludo;
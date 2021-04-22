import React, { Component } from 'react';


class Contador extends Component{

    constructor(props){
            super (props);

            this.state={
                hora: new Date().toLocaleTimeString(),
            };


            this.temporizador = null;


            // como las funciones no existen todavia, esto es nulo, hago:
            // ahora la funcion tiene el scope de la clase.
            //this.iniciar = this.iniciar.bind(this);
            this.detener = this.detener.bind(this);


    }


    componentDidMount()
{
    console.log("Montado");

}   

    componentDidUpdate()
{
    console.log("Actualizado");
}


iniciar(e){

    console.log("Iniciar: ");

    this.temporizador = setInterval(() => {

        this.setState( {
            hora : new Date().toLocaleTimeString(),
        })
        
    }, 1000)

}


iniciar = (e) =>{

    console.log("Iniciar: ");

    this.temporizador = setInterval(() => {

        this.setState( {
            hora : new Date().toLocaleTimeString(),
        })
        
    }, 1000)

}


detener(e){
    
    console.log("Detener: ");
    clearInterval(this.temporizador);
    
}



    render()
    {
        return (

            <>
                <h2>Soy un contador (Componente de clase)</h2>
                <p>{this.state.hora}</p>
                <button type="button" onClick={this.iniciar}> Iniciar </button>
                <button type="button" onClick={this.detener}> Frenar </button>
            </>

        )

    }

}


export default Contador;
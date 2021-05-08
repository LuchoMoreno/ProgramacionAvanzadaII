//imr
import React from 'react';

import {crearCondiciones} from "../helpers";


//sfc

// capturo el turno poniendo {turno}

const Turno = ({turno, bajaTurno}) => {

// lo desestructuro
    const {nombre, id, sexo, grupo, edad, diabetes, hipertension, obesidad, fecha} = turno;


    let condiciones = crearCondiciones(diabetes, obesidad, hipertension);


    const handleClick = (id) =>{
        bajaTurno(id);
    }




    return ( 

        <div className="turno">
                <p>Nombre: <span>{nombre}</span></p>
                <p>Edad: <span>{edad}</span></p>
                <p>Sexo: <span>{sexo}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Grupo: <span>{grupo}</span></p>
                <p>Condiciones: <span>{condiciones}</span></p>

                <button type="button" className="u-full-width button button eliminar" onClick={()=>{handleClick(id)}}>ELiminar</button>

        </div>
        

     );
}
 
export default Turno;
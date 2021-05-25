import React from 'react';
import icono from '../assets/left.png'

const BotonPrev = ({ handlerClick}) => {
    return ( 


        <div className="btn">
            <button onClick={handlerClick}>
                    <img src={icono} alt="Izquierda"/>
            </button>
        </div>

     );
}
 
export default BotonPrev;
import React from 'react';
import icono from '../assets/right.png'

const BotonNext = ( { handlerClick} ) => {
    return ( 


        <div className="btn">
            <button onClick={handlerClick}>
                    <img src={icono} alt="Derecha"/>
            </button>
        </div>

     );
}
 
export default BotonNext;
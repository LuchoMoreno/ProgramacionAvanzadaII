import React from 'react';
import Pokemon from './Pokemon';


const Listado = ({lista}) => {
    return ( 

        <div className="listado">

            {
                // si esto no llega a tener el metodo map, no lo use. Nos ahorra hacer validaciones.
                
                lista?.map(pokemonElemento => 
                <Pokemon 
                key = {pokemonElemento.id} 
                pokemon = {pokemonElemento}
                />)
            }

        </div>



     );
}
 
export default Listado;
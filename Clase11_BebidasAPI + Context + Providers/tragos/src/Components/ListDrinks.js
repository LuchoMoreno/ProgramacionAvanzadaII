import React, { useContext } from 'react';
import { CoctelesContext } from '../context/CoctelesContext';
import Drink from './Drink';

const ListDrinks = () => {

    const {resultados} = useContext(CoctelesContext);

    console.log("ESTOY ACÁ", resultados);

    return ( 

        <div className="row mt-6">
            {
                // lo voy a pasar por children. Así envio el objeto entero mapeado que me vino en la busqueda.
                resultados.map(drink => <Drink key={drink.idDrink}>{drink}</Drink>)
            }
        </div>

     );
}
 
export default ListDrinks;
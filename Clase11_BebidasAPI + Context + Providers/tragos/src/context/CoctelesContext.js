import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const CoctelesContext = createContext();

const CoctelesProvider = ({children}) =>{


    const [search, setSearch] = useState({
        ingrediente:"", 
        categoria:""});

    const {ingrediente, categoria} = search;

    const [resultados, setResultados] = useState([]);

    const [flagBusqueda, setFlagBusqueda] = useState(false);


    // cada vez que se cambia search, se ejecuta el useEffect

    useEffect( () => {


        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;


        const traerTragos = async () => {

            try {

                if (!flagBusqueda)return;

                const respuesta = await axios.get(URL);

                setResultados(respuesta.data.drinks);
                
            } catch (error) {
                console.error(error);
            }

        }


        traerTragos();

    }, [search, flagBusqueda])


    return(

        <CoctelesContext.Provider value={{setSearch, setFlagBusqueda, resultados}}>

                {children}

        </CoctelesContext.Provider>
    )

}

export default CoctelesProvider;
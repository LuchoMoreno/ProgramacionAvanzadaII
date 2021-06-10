import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// creamos un contexto, y lo exportamos de forma común.
export const CategoriasContext = createContext();



// declaro un provider que es una funcion

const CategoriasProvider = ({ children }) => {


    // seteo categorias
    const [categorias, setCategorias] = useState([]);

    // ejecuto una vez
    useEffect(() => {

        const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"


        const traerCategorias = async () => {

            try {
                
                const respuesta = await axios.get(URL);
                setCategorias(respuesta.data.drinks);

            } catch (error) {
                console.error(error);
            }
        }

        traerCategorias();

    }, []);


    return (
        // le envio las categorias cargadas previamente.
        <CategoriasContext.Provider value={{categorias}}>

            {children}

        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;
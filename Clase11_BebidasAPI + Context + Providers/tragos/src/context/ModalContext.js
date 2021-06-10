import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ModalContext = createContext();

const ModalProvider = ({children}) => {

    const [flagReceta, setFlagReceta] = useState(false);

    const [id, setId] = useState(null);

    const [receta, setReceta] = useState({});


    useEffect( () => {

        const traerRecetas = async() =>{

            const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

            try {

                if (!flagReceta)return;

                const respuesta = await axios.get(URL);
                setReceta(respuesta.data.drinks[0]);
                
            } catch (error) {
                console.error(error);
            }

        }

        traerRecetas();

    }, [id, flagReceta]); 




    return (

        <ModalContext.Provider value={{setId, receta, setFlagReceta, setReceta}}>
            {children}
        </ModalContext.Provider>
    )


}


export default ModalProvider;
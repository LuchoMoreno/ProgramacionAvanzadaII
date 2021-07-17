import React, { createContext, useEffect, useState } from 'react';


// creamos un contexto, y lo exportamos de forma común.
export const TokenContext = createContext();


// declaro un provider que es una funcion

const TokenProvider = ({children}) => {

    const [token, setToken] = useState(null);

    useEffect(() => {

            setToken(localStorage.getItem("token"));
            console.log(token);
        
    }, [token])


    return (
        // le envio el token obtenido previamente.
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )

  
}
 
export default TokenProvider;



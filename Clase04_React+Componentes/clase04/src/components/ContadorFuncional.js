import React, {useState} from 'react';


const ContadorFuncional = () => {


    // El array devuelve 2 elementos.

    // Le paso el valor inicial de la propiedad que quiero manejar.
    const [contador, setContador] = useState(0);


    setInterval(() => {
       setContador(contador+1);
    }, 1000)

    return (


        <>
            <h2>Soy un contador :D +1</h2>
            <p>{contador}</p>
        </>


    )



}

export default ContadorFuncional;
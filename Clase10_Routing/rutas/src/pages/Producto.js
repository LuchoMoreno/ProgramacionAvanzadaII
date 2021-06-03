import React from 'react';
import { useLocation } from 'react-router';

const Producto = () => {

    const location = useLocation();
    
    let params = new URLSearchParams(location.search)

    let id = params.get('id');
    let precio = params.get('precio');

    console.log(id,precio);


    return ( <h1>Producto</h1> );
}
 
export default Producto;
import React from 'react';

const Vacuna = ({vacuna, setCarrito, vacunas, carrito}) => {

    const {id, marca, precio} = vacuna;

    const agregarVacuna = (id) =>{
        console.log("comprando.. " + id)
        setCarrito([...carrito, ...(vacunas.filter(vac => vac.id === id))]);

    }

    const eliminarVacuna = (id) =>{
        console.log("Eliminando..." + id);

        const indice = carrito.findIndex((v) => v.id === id);

        const aux = [...carrito];

        aux.splice(indice, 1);
      
        setCarrito(aux);
    }

    return (
        <div>
            <h3>{marca}</h3>
            <p><b>Precio:</b>${precio}</p>
           
           {
               // si viene una vacuna valida a true, sino al reves
               vacunas
               
               ? // que si

               <button type="button" 
               onClick={ ()=>{ agregarVacuna(id)} }>Comprar</button>

               : // que no

               <button type="button" 
               onClick={ ()=>{ eliminarVacuna(id)} }>Eliminar</button>

           }
        </div>
    );
}
 
export default Vacuna;
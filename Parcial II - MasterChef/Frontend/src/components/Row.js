import React from 'react';


const Row = ({ cocinero, handlerDelete, handlerUpdate }) => {

    const { id, nombre, edad, especialidad, cantidadTemp, favorito} = cocinero;

    return (

        <tr>

            <th>{nombre}</th>
            <th>{edad}</th>
            <th>{especialidad}</th>
            <th>{cantidadTemp}</th>
            <th>{favorito ? "Si" : "No"}</th>
            <th>
                <button onClick={() => handlerUpdate(cocinero)}> Editar </button>
                <button onClick={() => handlerDelete(id)}> Eliminar </button>
            </th>

        </tr>

    );
}


export default Row;
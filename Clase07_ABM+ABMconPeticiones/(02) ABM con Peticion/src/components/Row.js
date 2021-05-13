import React from 'react';


const Row = ({ cocinero, handlerDelete, handlerUpdate }) => {

    const { id, nombre, especialidad } = cocinero;

    return (

        <tr>

            <th>{nombre}</th>
            <th>{especialidad}</th>
            <th>
                <button onClick={() => handlerUpdate(cocinero)}> Editar </button>
                <button onClick={() => handlerDelete(id)}> Eliminar </button>
            </th>

        </tr>

    );
}


export default Row;
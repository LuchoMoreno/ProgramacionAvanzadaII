import React from 'react';
import Row from './Row';


const Tabla = ( {data, bajaCocinero, setEditado} ) => {
    return (

        <div className="contenedor-tabla">

            <table>
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Especialidad</th>
                        <th>Temporadas</th>
                        <th>Favorito</th>
                        <th>Acciones</th>

                    </tr>
                </thead>


                <tbody>

                    {
                        // data.length === 0 ?
                        !data.length ? <tr><td colSpan="3">  Sin resultados </td></tr> : 

                        data.map(el => 
                        <Row key={el.id} cocinero={el} 
                        handlerUpdate = {setEditado} 
                        handlerDelete = {bajaCocinero}/>)
                    }
                    
                </tbody>

            </table>


        </div>


    );
}

export default Tabla;
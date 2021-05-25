import React, {useEffect, useState} from 'react';

// formulario inicial.
const frmInicial = {
    id : null,
    nombre : '',
    especialidad : '', 
};



const Formulario = ( {altaCocinero, modificarCocinero, editado, setEditado}) => {

    const [form, setForm] = useState(frmInicial);

    const {nombre, especialidad} = form;

    useEffect(()=> {

        if (editado){
            setForm (editado);
        }

        else
        {
            setForm(frmInicial);
        }

    }, [editado]);


    // cambia los atributos que cargo en el form.
const handlerChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value});
}

// hago el submit.
const handlerSubmit = (e) =>{
    e.preventDefault();

    if (nombre.trim() === "" || especialidad.trim() === "")
    {
        alert("Datos incompletos");
        return;
    }

    console.log("enviando...");

    // dos opciones, o hago el alta, o hago el update.


    // vemos si editado es null o no. Un nulo valida a false.

    editado ? modificarCocinero(form) : altaCocinero(form);

    handlerReset();

}

// reseteo, vuelvo a 0 el objeto con lo que previamente harcodee.
const handlerReset = (e) =>{

    console.log("HOLA ESTOY ACÁ");
    setForm(frmInicial);
    setEditado(null);

}


    return ( 

        <div className = "contenedor-form">

            <form onSubmit={handlerSubmit}>

                <input type="text" name = "nombre" placeholder="Ingrese su nombre" onChange={handlerChange} value={nombre}/>
                <input type="text" name = "especialidad" placeholder="Ingrese su especialidad" onChange={handlerChange} value={especialidad}/>
                <input type="submit" value = {editado ? "Modificar cocinero" : "Alta cocinero"} onClick={handlerSubmit} />
                <input type="reset" value = "Limpiar" onClick={handlerReset} />

            </form>

        </div>

    );
}
 
export default Formulario;
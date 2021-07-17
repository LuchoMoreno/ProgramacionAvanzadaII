import React, { useEffect, useState } from 'react';

// formulario inicial.
const frmInicial = {
    id: null,
    nombre: '',
    edad: '',
    cantidadTemp : '',
    especialidad: '',
    favorito: false,
};


const Formulario = ({ altaCocinero, modificarCocinero, editado, setEditado }) => {

    const [form, setForm] = useState(frmInicial);

    const { nombre, edad, especialidad, cantidadTemp, favorito } = form;

    useEffect(() => {

        if (editado) {
            setForm(editado);
        }

        else {
            setForm(frmInicial);
        }

    }, [editado]);


    // cambia los atributos que cargo en el form.
    const handlerChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // hago el submit.
    const handlerSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || especialidad.trim() === "") {
            alert("Datos incompletos");
            return;
        }

        if (edad < 18 || edad > 65 || isNaN(edad))
        {
            alert("Hay un error con la edad. Vuelva a intentarlo");
            return;
        }

        if (cantidadTemp < 1 || cantidadTemp > 100 || isNaN(cantidadTemp))
        {
            alert("Hay un error con la cantidad de temporadas. Vuelva a intentarlo");
            return;
        }


        editado ? modificarCocinero(form) : altaCocinero(form);

        handlerReset();
    }

    // reseteo, vuelvo a 0 el objeto con lo que previamente harcodee.
    const handlerReset = (e) => {

        console.log("HOLA ESTOY ACÁ");
        setForm(frmInicial);
        setEditado(null);
    }


    const handlerFav = (e) => {

        if (e.target.value === "Favorito") {
            setForm({ ...form, favorito: true });
        }
        else {
            setForm({ ...form, favorito: false });
        }
    }



    return (

        <div className="contenedor-form">

            <form onSubmit={handlerSubmit}>

                <div className="divColumna">
                    <input type="text" name="nombre" placeholder="Ingrese su nombre" onChange={handlerChange} value={nombre} />
                    <input type="text" name="edad" placeholder="Ingrese su edad" onChange={handlerChange} value={edad} />
                    <input type="text" name="especialidad" placeholder="Ingrese su especialidad" onChange={handlerChange} value={especialidad} />
                    <input type="text" name="cantidadTemp" placeholder="Ingrese cant temporadas" onChange={handlerChange} value={cantidadTemp} />

                </div>


                <fieldset>
                    <legend>Favorito: </legend>
                    <input type="radio" name="favorito" value="Favorito" onChange={handlerFav} checked={favorito === true} /> Favorito
                    <input type="radio" name="favorito" value="NoFavorito" onChange={handlerFav} checked={favorito === false} /> No Favorito
                </fieldset>


                <input type="submit" value={editado ? "Modificar cocinero" : "Alta cocinero"} onClick={handlerSubmit} />
                <input type="reset" value="Limpiar" onClick={handlerReset} />

            </form>

        </div>

    );
}

export default Formulario;
//irm
import React, { useState } from 'react';
import shortid from "shortid";


//sfc
const Formulario = ({setTurnos, turnos}) => {

    // lo trato como objeto
    const [form, setForm] = useState({
        nombre: "",
        edad: "",
        sexo: "Femenino",
        fecha: "",
        grupo: "mas60",
        diabetes: false,
        obesidad: false,
        hipertension: false,
    });


    const [error, setError] = useState(false);


    // antigua nomenclatura de por ejemplo ["nombre"]:{nombre}
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleChecked = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.checked});
    }

    // aca lo desestructuro.

    const {nombre, edad, sexo, grupo, fecha, diabetes, obesidad, hipertension} = form;


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if (nombre.trim() === "" || edad.trim() === "" || grupo.trim() === "" || fecha.trim() === "")
        {
            setError(true);
            return;
        }

        setError(false);

        const nuevoTurno = {...form};
        nuevoTurno.id = shortid.generate();

        // esto trae el setturnos que esta en app.js
        setTurnos([...turnos, nuevoTurno]);

        // con esto limpio el formulario
        setForm(
            {
                nombre: "",
                edad: "",
                sexo: "Femenino",
                fecha: "",
                grupo: "",
                diabetes: false,
                obesidad: false,
                hipertension: false,
            }
        )
    }


    return (

        <>
            <h2> Sacar turno </h2>

            {
                error ? <p className="alerta-error"> Todos los campos son obligatorios </p> : null
            }

            <form onSubmit={handleSubmit}>

                <label htmlFor="txtNombre">Nombre:</label>
                <input className="u-full-width" type="text" id="txtNombre" name="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={handleChange} />

                <label htmlFor="txtEdad">Edad:</label>
                <input className="u-full-width" type="number" id="txtEdad" name="edad" placeholder="Ingrese su edad" value={edad} onChange={handleChange} />

                <label htmlFor="fecha">Fecha nacimiento:</label>
                <input className="u-full-width" type="date" id="fecha" name="fecha" value={fecha} onChange={handleChange} />


                <fieldset>
                    <legend>Sexo: </legend>
                    <input type="radio" name="sexo" value="Masculino" onChange={handleChange} checked = {sexo === "Masculino"} /> Masculino
                <input type="radio" name="sexo" value="Femenino" onChange={handleChange} checked = {sexo === "Femenino"}/> Femenino
            </fieldset>


                <label htmlFor="grupo">Grupo poblacional:</label>

                <select name="grupo" id="grupo" className="u-full-width" value={grupo} onChange={handleChange}>
                    <option value="mas60"> Mayor de 60 años</option>
                    <option value="profeprim"> Profesor Primaria/Secundaria</option>
                    <option value="profeuni"> Profesor Universitario</option>
                    <option value="seguridad"> Seguridad</option>
                    <option value="sanidad"> Sanidad</option>
                </select>


                <fieldset>
                    <legend>Condiciones: </legend>
                    <input type="checkbox" name="diabetes" onChange={handleChecked} checked = {diabetes}/> Diabetes <br />
                    <input type="checkbox" name="obesidad" onChange={handleChecked} checked = {obesidad}/> Obesidad <br />
                    <input type="checkbox" name="hipertension" onChange={handleChecked} checked = {hipertension}/> Hipertension <br />
                </fieldset>


                <input type="submit" className="u-full-width button-primary" value="Sacar Turno" />

            </form>

        </>
    );
}

export default Formulario;
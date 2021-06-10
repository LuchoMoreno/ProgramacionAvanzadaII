import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { CoctelesContext } from '../context/CoctelesContext';

const Formulario = () => {


    // traemos el CONTEXTO. 
    const {categorias} = useContext(CategoriasContext);


    // traemos el setSearch. Es una funcion de busqueda.
    const { setSearch, setFlagBusqueda } = useContext(CoctelesContext);
    

    console.log(categorias);


    const [busqueda, setBusqueda] = useState({
    ingrediente:"", 
    categoria:""});

    const {ingrediente, categoria} = busqueda;


    const handlerChanges = (e) => {

    setBusqueda({...busqueda, [e.target.name] : e.target.value});

    }

    const handlerSubmit = (e) => {

        e.preventDefault();

        if (ingrediente.trim() === "" || categoria.trim() === "")
        {
            alert("Debe llenar datos");
            return;
        }

        setSearch(busqueda);
        setFlagBusqueda(true);

        console.log("enviando");
    }

    return (

        <div className="row pb-4">


            <form className="col-12 mt-4" onSubmit={handlerSubmit}>

                <fieldset className="text-center">

                        <legend>
                            Buscar Bebidas Por Ingrediente y Categoria
                        </legend>

                            <div className="row pt-4">


                                <div className="col-md-4">
                                    <input type="text"
                                        name="ingrediente"
                                        placeholder="Ingrese ingrediente"
                                        value = {ingrediente}
                                        onChange={handlerChanges}
                                        className="form-control" />
                                </div>

                                <div className="col-md-4">

                                    <select name="categoria" className="form-control" value={categoria} onChange={handlerChanges}>
                                        <option value="">--Seleccione Categoria--</option>

                                            {
                                                categorias.map(categoria => <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>)
                                            }


                                    </select>

                                </div>

                                <div className="col-md-4">

                                    <input type="submit" value="Buscar Bebidas" className="btn btn-primary w-100"/>

                                </div>

                            </div>

                </fieldset>

            </form>


        </div>


    );
}

export default Formulario;
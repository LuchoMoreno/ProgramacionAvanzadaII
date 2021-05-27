import React, { useState } from 'react';


const API_KEY = "e3f8d4d1";
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const SearchForm = ({onSearch}) => {


    const [titulo, setTitulo] = useState("");


    const handlerChange = (e) =>{
        setTitulo(e.target.value);
    }



    const handlerSubmit = (e) => {
        
        e.preventDefault();

        if (titulo.trim() === "")return;
        

        console.log("Probando que handlerSubmit funciona");

        const traerLista = async() =>
        {
            try{

                let res = await fetch(URL + titulo);
                let data = await res.json();


                if (data.Response === "True"){
                    onSearch(data.Search);
                }
    
                else{
                    onSearch({mensaje:data.Error});
                }
            }

            catch(error){

                console.log(error);
            }
        }

        traerLista();


        /* A PARTIR DE ACÁ ES LO MISMO PERO CON FETCH.

        fetch(URL + titulo)
    
        .then ( (res) => {

            console.log(res);

            return res.ok ? res.json() : Promise.reject(res);

        }).then ( (data) => {


            if (data.Response === "True"){
                onSearch(data.Search);
            }

            else{
                onSearch({mensaje:data.Error});
            }
        
        console.log(data);

        }).catch( (err) => {
            console.log(err.status, err.statusText);
        })

        */

}


    return (


        <form onSubmit = {handlerSubmit}>

        <div className="field has-addons">

            <div className="control">
                <input 
                className="input" 
                type="text" 
                placeholder="Ingrese titulo" 
                onChange={handlerChange}
                value={titulo} />
            </div>

            <div className="control">
                <button className="button is-info">Search</button>
            </div>

        </div>


        </form>


    );
}

export default SearchForm;
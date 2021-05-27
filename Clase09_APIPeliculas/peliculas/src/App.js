import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'

import 'bulma/css/bulma.css'
import SearchForm from './components/SearchForm';

import MoviesList from './components/MoviesList'



function App() {


  const [lista, setLista] = useState([]);
  const [flag, setFlag] = useState(false);
  const [mensaje, setMensaje] = useState("");


  const handlerResults = (resultados) => {

    if (resultados.mensaje)
    {
      setMensaje(resultados.mensaje);
    }
    else
    {
      setLista(resultados);
      setFlag(true);
      setMensaje("");
    }

   
    
  
  }

  // completar 21:49
  return (
    <div>
      
      <Header> Buscador de peliculas </Header>

      <div className="container-form">
            <SearchForm onSearch = {handlerResults}/>
      </div>

      {
        flag &&

        mensaje ? ( <p>{mensaje}</p>)

        : 
        
        <MoviesList lista = {lista}/>
        
      }

    </div>
  );
}

export default App;

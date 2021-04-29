import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'




const utnSistemas = {
  titulo : "Carreras Sistemas UTN-FRA",

  carreras : [
    {
      nombre: "Técnico Universitario en Programacion",
      materias: 21
      },
  
      {
        nombre : "Técnico universitario en Sistemas Informáticos",
        materias: 15
      },
  
      {
        nombre : "Licenciatura en algo",
        materias : 20
      }
  ]

  }

 
ReactDOM.render(<App facultad = {utnSistemas}/>, document.getElementById('root') );


import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

//sfc
const  App = () => {

  const titulo = "Carreras Sistemas UTN-FRA";

  const primera = {
    nombre: "Técnico Universitario en Programacion",
    materias: 21
  };

  const segunda = {
    nombre : "Técnico universitario en Sistemas Informáticos",
    materias: 15
  };
  

  const tercera = {
    nombre : "Licenciatura en algo",
    materias : 20
  };



  

  return ( 

    <div>
           <Header titulo={titulo}/>
           <Content carrera1={primera} cantidad1={primera}
           carrera2={segunda} cantidad2={segunda}
           carrera3={tercera} cantidad3={tercera}
           />
           <Total cantidad1={primera} cantidad2={segunda} cantidad3={tercera}/>
    </div>



   );
}
 

ReactDOM.render(<App />, document.getElementById('root') );


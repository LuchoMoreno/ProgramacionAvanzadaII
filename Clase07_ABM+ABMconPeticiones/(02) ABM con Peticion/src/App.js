 // importante de la clase: https://jsonplaceholder.typicode.com/


import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Tabla from './components/Tabla';

import Loader from './components/Loader';



const URL = "http://localhost:5000/chef";



function App() {

// para el spinner
  const [loading, setLoading] = useState (false);

  const [cocineros, setCocineros] = useState([]);

  // va a ser un cocinero, que cuando hagamos click en el boton editar se carga en esta variable.
  const [editado, setEditado] = useState(null);

  const [resultado, setResultado] = useState(false);


  useEffect(() => {

    fetch(URL).then((res) => {
      
      console.log(res);
    
      if (res.ok)
      {
        return res.json();
      }
      else
      {
        Promise.reject(res);
      }
    
    }).then((data) => {

      setCocineros(data);

    })

    .catch((error) => {console.log(error)});



  }, [])


  const altaCocinero = (nuevoCocinero) =>{
    nuevoCocinero.id = Date.now();

    setLoading(true);

    setTimeout(() => {
      setCocineros([...cocineros, nuevoCocinero]);
      setLoading(false);

    }, 2000);

  } 


  const modificarCocinero = (cocinero) =>{

    // MAP. lo que retorna el callback, retorna un array con los retornos respectivamente.
    setCocineros(cocineros.map(el => el.id === cocinero.id ? cocinero : el));
  } 

  const bajaCocinero = (id) =>{
    // devuelve todos los elementos, menos el turno que le pasamos
    setCocineros(cocineros.filter(el => el.id !== id));

  }


  return (
    <div className="container">
      
    <Header title={"MasterChef"}/>

    <Formulario 
    altaCocinero = {altaCocinero} 
    modificarCocinero = {modificarCocinero}
    editado = {editado}
    setEditado = {setEditado}
    />


    { loading ? <Loader/> : <Tabla data = {cocineros} bajaCocinero = {bajaCocinero} setEditado = {setEditado}/>}


    </div>
  );
}

export default App;

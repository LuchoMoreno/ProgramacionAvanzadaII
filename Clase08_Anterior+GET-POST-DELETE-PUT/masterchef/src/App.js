 // importante de la clase: https://jsonplaceholder.typicode.com/


import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Tabla from './components/Tabla';

import Loader from './components/Loader';

import Mensaje from './components/Mensaje';


const URL = "http://localhost:5000/chef/";
const ERRORINICIAL = {
  error:false,
  mensaje:"",
  bgc:""
}



function App() {

// para el spinner
  const [loading, setLoading] = useState (false);


  const [cocineros, setCocineros] = useState([]);

  // va a ser un cocinero, que cuando hagamos click en el boton editar se carga en esta variable.
  const [editado, setEditado] = useState(null);


  const [error, setError] = useState(ERRORINICIAL);


  useEffect(() => {

    setLoading(true);

    fetch(URL).then((res) => {
      
      console.log(res);
    
      if (res.ok)
      {
        return res.json();
        setError(ERRORINICIAL);
      }
      else
      {
        Promise.reject(res);
      }
    
    }).then((data) => {

      setCocineros(data);
      setLoading(false);

    })

    .catch((error) => {

      setLoading(false);

      let statusText = error.statusText || "Ocurrio un error";


      setError({error:true, mensaje: `Error: ${error.status} - ${statusText}`, bgc:"red"});
    
    
    });



  }, [])


  const altaCocinero = (nuevoCocinero) =>{
    //nuevoCocinero.id = Date.now();

    setLoading(true);

    // objeto de configuracion

    const options = {
      method:"POST",
      headers:{"Content-type": "application/json;charset=utf-8"},
      body: JSON.stringify(nuevoCocinero)
    }

    fetch(URL, options).then((res) => {

      if (res.ok)
      {
        return res.json();
        setError(ERRORINICIAL);
      }
      else
      {
        Promise.reject(res);
      }


    }).then( (cocinero) => {

      setCocineros([...cocineros, cocinero]);
      setLoading(false);
      setError(ERRORINICIAL);

    }).catch ( (error) => {

      setLoading(false);

      let statusText = error.statusText || "Ocurrio un error";

      setError({error:true, mensaje: `Error: ${error.status} - ${statusText}`, bgc:"red"});

    })


  } 


  const modificarCocinero = (cocinero) =>{

    window.confirm("Confirma Modificacion?");


    setLoading(true);

    // objeto de configuracion

    const options = {
      method:"PUT",
      headers:{"Content-type": "application/json;charset=utf-8"},
      body: JSON.stringify(cocinero)
    }

    // le concatenamos el ID.
    fetch(URL + cocinero.id, options).then((res) => {

      if (res.ok)
      {
        return res.json();
        setError(ERRORINICIAL);
      }
      else
      {
        Promise.reject(res);
      }


    }).then( (cocinero) => {

      setCocineros(cocineros.map(el => el.id === cocinero.id ? cocinero : el));
      
      setLoading(false);

      setError(ERRORINICIAL);

      
    }).catch ( (error) => {

      setLoading(false);

      let statusText = error.statusText || "Ocurrio un error";

      setError({error:true, mensaje: `Error: ${error.status} - ${statusText}`, bgc:"red"});

    })

  } 

  const bajaCocinero = (id) =>{

   if(!window.confirm("Confirma eliminacion?"))return;


    setLoading(true);

    // objeto de configuracion

    const options = {
      method:"DELETE",
      headers:{"Content-type": "application/json;charset=utf-8"},
    }

    // le concatenamos el ID.
    fetch(URL + id, options).then((res) => {

      if (res.ok)
      {
        return res.json();
        setError(ERRORINICIAL);
      }
      else
      {
        Promise.reject(res);
      }


    }).then( (cocinero) => {

      // devuelve todos los elementos, menos el turno que le pasamos
      
      setCocineros(cocineros.filter(el => el.id !== id));

      setLoading(false);

      setError(ERRORINICIAL);

      
    }).catch ( (error) => {

      setLoading(false);

      let statusText = error.statusText || "Ocurrio un error";

      setError({error:true, mensaje: `Error: ${error.status} - ${statusText}`, bgc:"red"});

    })


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

    {error.error && <Mensaje color="white" bgColor = {error.bgc}>{error.mensaje}</Mensaje>}

    { loading ? <Loader/> : <Tabla data = {cocineros} bajaCocinero = {bajaCocinero} setEditado = {setEditado}/>}


    </div>
  );
}

export default App;

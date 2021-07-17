import React, { useEffect, useState, useContext } from 'react';

// Componentes
import Formulario from '../components/Formulario';
import Header from '../components/Header';
import Tabla from '../components/Tabla';
import Loader from '../components/Loader';
import Mensaje from '../components/Mensaje';

// Contextos.
import { TokenContext } from '../context/TokenContext';

const URL = "http://localhost:3500/api/cocineros/";


const ERRORINICIAL = {
  error: false,
  mensaje: "",
  bgc: ""
}

// solo para testear
//const TokenHardcodeado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1bGFuaXRvIiwiaWQiOiI2MGRkMDY3NmYyYTkzYjRhMDBhMGFiYjYiLCJpYXQiOjE2MjU2ODczMTJ9.aSrdkbYkWrgVV7DjTlVdClkaVmvTeNGRKApA_F_ImdQ";

const Home = () => {

const {token} = useContext(TokenContext);

// para el spinner
const [loading, setLoading] = useState(false);

const [cocineros, setCocineros] = useState([]);

// va a ser un cocinero, que cuando hagamos click en el boton editar se carga en esta variable.
const [editado, setEditado] = useState(null);

const [error, setError] = useState(ERRORINICIAL);


useEffect(() => {

  setLoading(true);

  const getLista = async () => {

    try {

      const options = {
        method: "GET",
        headers: { "Content-type": "application/json;charset=utf-8", "Authorization" : "Bearer " + token},
      }

      const res = await fetch(URL, options);
      const data = await res.json();
      setCocineros(data);
      console.log(data);

    } catch (err) {
      let statusText = error.statusText || "Ocurrio un error";
      setError({ error: true, mensaje: `Error: ${error.status} - ${statusText}`, bgc: "red" });
      console.log("Error para hacer el fetch. Tipo de error: ", err);
    }
    finally {
      setLoading(false);
    };
  }
  getLista();

}, [])


const altaCocinero = (nuevoCocinero) => {

  setLoading(true);

  // objeto de configuracion

  const options = {
    method: "POST",
    headers: { "Content-type": "application/json;charset=utf-8", "Authorization" : "Bearer " + token},
    body: JSON.stringify(nuevoCocinero)
  }

  const alta = async () => {

    try {
      const res = await fetch(URL, options);
      const nuevoCocinero = await res.json();
      setCocineros([...cocineros, nuevoCocinero]);
      setError(ERRORINICIAL);

    } catch (error) {

      let statusText = error.statusText || "Ocurrio un error";
      setError({ error: true, mensaje: `Error: ${error.status} - ${statusText}`, bgc: "red" });

    }
    finally {
      setLoading(false);
    }


  }

  alta();
  
}


const modificarCocinero = (cocinero) => {

  window.confirm("Confirma Modificacion?");

  // guardo el ID que me vino del cocinero.
  let id = cocinero.id;
  // la borro para que el fetch no tire problemas.
  delete cocinero.id;

  setLoading(true);

  const options = {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=utf-8", "Authorization" : "Bearer " + token},
    body: JSON.stringify(cocinero)
  }

  const modificacion = async () => {

    try {

      const res = await fetch(URL + "/" + id, options);
      const nuevoCocinero = await res.json();

      console.log(nuevoCocinero);

      // setCocineros(cocineros.map(el => el.id === cocinero.id ? cocinero : el));

      setCocineros(cocineros.map((cocinerito) => {
        if (cocinerito.id === id) {
          cocinerito = cocinero;
          cocinerito.id = id;
        }
        return cocinerito;
      }));

      setError(ERRORINICIAL);

    } catch (error) {

      let statusText = error.statusText || "Ocurrio un error";

      setError({ error: true, mensaje: `Error: ${error.status} - ${statusText}`, bgc: "red" });

    }
    finally {
      setLoading(false);
    }

  }

  modificacion();

}


const bajaCocinero = (id) => {

  if (!window.confirm("Confirma eliminacion?")) return;

  setLoading(true);

  const options = {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=utf-8", "Authorization" : "Bearer " + token},
  }


  const eliminar = async () => {

    try {
      const res = await fetch(URL + "/" + id, options);
      setCocineros(cocineros.filter(cocinerito => cocinerito.id !== id));
      setError(ERRORINICIAL);

    } catch (error) {

      let statusText = error.statusText || "Ocurrio un error";
      setError({ error: true, mensaje: `Error: ${error.status} - ${statusText}`, bgc: "red" });

    }
    finally {
      setLoading(false);
    }
  }

  eliminar();


}


return (


  <div className="container">
    { token ? <h1>Hay token</h1> : <h1>No hay token</h1>} 

    <Header title={"MasterChef"} />

    <Formulario
      altaCocinero={altaCocinero}
      modificarCocinero={modificarCocinero}
      editado={editado}
      setEditado={setEditado}
    />

    {error.error && <Mensaje color="white" bgColor={error.bgc}>{error.mensaje}</Mensaje>}

    {loading ? <Loader /> : <Tabla data={cocineros} bajaCocinero={bajaCocinero} setEditado={setEditado} />}


  </div>
);
 
}
 
export default Home;
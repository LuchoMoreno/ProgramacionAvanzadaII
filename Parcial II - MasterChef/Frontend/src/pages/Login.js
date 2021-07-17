import React, { useState, useContext } from 'react';

// Contextos.
import { TokenContext } from '../context/TokenContext';

// formulario inicial.
const frmInicialLogin = {
  username: '',
  password: '',
};


const URLLogin = "http://localhost:3500/api/login";

const Login = () => {


  const {token, setToken} = useContext(TokenContext);

  const [form, setForm] = useState(frmInicialLogin);

  const { username, password } = form;

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  const handlerSubmit = (e) => {

    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Datos incompletos");
      return;
    }

    realizarPeticion(form);
    setForm(frmInicialLogin);
  }



  const realizarPeticion = (form) => {

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(form)
    }

    const recogerToken = async () => {

      try {
        const res = await fetch(URLLogin, options);
        const nuevaRespuesta = await res.json();

        if (typeof nuevaRespuesta.token === 'undefined')
        {
          alert("No existe tal usuario.");
        }
        else
        {
          console.log(username, password);
          localStorage.setItem("token", nuevaRespuesta.token);
          setToken(nuevaRespuesta.token);
          alert("Usuario encontrado. Logueado con exito. Se ha generado un token :)");
        }

      } catch (error) {

        console.log("error");

      }

    }

    recogerToken();
  }




  return (



    <div className="contenedor-form">

      <form onSubmit={handlerSubmit}>


        <div className="wrapper">
          <div className="row">
            <h1> LOGIN </h1>
            <div className="form-control">
              <input name="username" placeholder="Ingrese su nombre" onChange={handlerChange} value={username} />
              <span className="toggle">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="form-control">
              <input name="password" type="password" placeholder="Ingrese su contraseña" onChange={handlerChange} value={password} />

            </div>
            <input type="submit" value={"Ingresar"} onClick={handlerSubmit} />         
            </div>
        </div>

      </form>

    </div>

  );
}

export default Login;
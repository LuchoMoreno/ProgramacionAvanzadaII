import React, { useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Turno from './components/Turno';

function App() {

  let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));

  if (turnosIniciales == null)
  {
    turnosIniciales = [];
  }


  const [turnos, setTurnos] = useState(turnosIniciales);


  const bajaTurno = (id) =>{

    // devuelve todos los elementos, menos el turno que le pasamos
    setTurnos(turnos.filter(turno => turno.id !== id));
  }


  // es una funcion que siempre recibe un callback.

  // si quiero que se ejecute este codigo, debo pasarle como segundo parametro un array con lo que quiero dentro. 
  useEffect ( () => {

    localStorage.setItem("turnos", JSON.stringify(turnos));

}, [turnos] )


  return (
    <div>

      <h1>Turnos Vacunas</h1>

      <div className="container">

        <div className="row">

          <div className="one-half column">

            <Formulario setTurnos={setTurnos} turnos={turnos} />

          </div>

          <div className="one-half column">


            {
                !turnos.length 
                ? <h2> No hay turnos</h2> 
                
                : 
                turnos.map(turno => <Turno key={turno.id} turno={turno} bajaTurno={bajaTurno}/>)
            }

          </div>

        </div>
      </div>
    </div>


  );
}

export default App;

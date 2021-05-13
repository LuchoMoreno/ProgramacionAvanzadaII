import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Tabla from './components/Tabla';


const lista = [
  {id:1, nombre:"German", especialidad:"Vegetales"},
  {id:2, nombre:"Donato", especialidad:"Pastas"},
  {id:3, nombre:"Dolly", especialidad:"Asado"},
  {id:4, nombre:"Kristophe", especialidad:"Croissant"},
  {id:5, nombre:"Damian", especialidad:"Macarons"},
];



function App() {


  const [cocineros, setCocineros] = useState(lista);

  // va a ser un cocinero, que cuando hagamos click en el boton editar se carga en esta variable.
  const [editado, setEditado] = useState(null);


  const altaCocinero = (nuevoCocinero) =>{
    nuevoCocinero.id = Date.now();
    setCocineros([...cocineros, nuevoCocinero]);
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

    <Tabla 
    data = {cocineros} 
    bajaCocinero = {bajaCocinero}
    setEditado = {setEditado}
    />


    </div>
  );
}

export default App;

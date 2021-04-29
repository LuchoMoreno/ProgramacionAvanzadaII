import React, {useState} from 'react'
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Lista from './components/Lista';
import Carrito from './components/Carrito';

function App() {


  const [vacunas, setVacunas] = useState([
    {id:1, marca:"SputnikV", precio:1000}, 
    {id:2, marca:"Astra Zeneca", precio:1100},
    {id:3, marca:"Pfizer", precio:900},
    {id:4, marca:"Synopharm", precio:1300},
    {id:5, marca:"Jonhson", precio:950},
  ]);


  const [carrito, setCarrito] = useState([]);




  return (
    <div className = "container">
      

      <Header titulo={"Vacunas Reactivas"} />

      
      <section className="principal">
      <Lista titulo ={"Listado de vacunas"}  
      vacunas = {vacunas}
      setCarrito = {setCarrito}
      carrito = {carrito}
      
      />

      <Carrito titulo ={"Carrito de compras"} 
       setCarrito = {setCarrito}
       carrito = {carrito}
      
      />
      </section>
      

      <Footer/>


    </div>
  );
}

export default App;

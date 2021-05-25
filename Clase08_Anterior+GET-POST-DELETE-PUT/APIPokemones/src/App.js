import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Listado from './components/Listado';


let URL = 'https://pokeapi.co/api/v2/pokemon';


function App() {

  const[lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  
  const [peticion, setPeticion] = useState(false);

  const handlerNext = () =>{

    if (!next) return;
    console.log("next");
    URL = next;
    setPeticion(!peticion);
  }

  const handlerPrev = () =>{

    if (!prev) return;
    console.log("prev");
    URL = prev;
    setPeticion(!peticion);
  }


  useEffect( () => {

    setLista([]);

    const getData = async () =>{

    setLoading(true);

      try{
        let res = await fetch(URL);
        let data = await res.json();

        setNext(data.next);
        setPrev(data.previous);

        data.results.forEach( async(pok) => {
         let res = await fetch(pok.url);
         let p = await res.json();

          const nuevoPokemon = {
          id: p.id, 
          name: p.name, 
          avatar:p.sprites.front_default};
        
          setLista( (value) => [...value, nuevoPokemon]);
      })
    }
    
      catch (error)
      {
        console.log(error); 
      }

      finally
      {

        setLoading(false);
      }
    }

    getData();

  },[peticion]);


  return (
    <div>
        <Header title="Listado de Pokemones" handlerNext={handlerNext} handlerPrev={handlerPrev}/>
        {
          loading || <Listado lista={lista}/>
        }
    </div>
  );
}

export default App;

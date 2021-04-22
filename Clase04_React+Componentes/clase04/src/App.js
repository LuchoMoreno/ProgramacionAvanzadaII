import React, {Component} from 'react';

// Importo el componente saludo.
import Saludo from "./components/Saludo";

import Contador from "./components/Contador";

import ContadorFuncional from "./components/ContadorFuncional";

import Listado from "./components/Listado";


 class App extends Component {

  nombre = "Jose";
  numero = 5;
  array = [1,2,3,4,5]


  render(){
    return (
    
  
    <>
    <div>
    <Saludo 
      mensaje={this.nombre} 
      numero={this.numero} 
      booleano={true}
      array = {this.array}
      function = {(a) => a*2}
      componente = {<strong> holi</strong>}
      objeto = {{nombre:"Lucho", edad:21}}
      />
    </div>


      <div>
        <Contador/>
      </div>

<br/>
<br/>

      <div>
      <Listado/>
      </div>


    </>
      
      


      )
  }

}

export default App;

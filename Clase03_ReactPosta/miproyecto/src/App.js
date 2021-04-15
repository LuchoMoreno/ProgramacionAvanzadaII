import {Component} from "react";
import './App.css';


const Saludo = () =>
{
  return <h2> Hola mundo </h2>
}


class Despedida extends Component{
  render(){
      return <h3> Chau mundo </h3>
  }
}


const SaludoConParametros = (props) =>
{
  return <h2>Hola, tu nombre es: {props.name}</h2>
}
const nombre = "Josecito";



function App() {
  return (
    <div className="App">
    <Saludo/>
    <Despedida/>
    <SaludoConParametros name={nombre}/>
    </div>
  );
}

export default App;

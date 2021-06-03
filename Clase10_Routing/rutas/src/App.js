import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

//imports
import Home from './pages/Home';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Navegacion from './components/Navegacion';
import Error404 from './pages/Error404';
import "bulma/css/bulma.css";
import Usuario from './pages/Usuario';
import Producto from './pages/Producto';


function App() {
  return (
    <div >

      <h1>React Router APP.JS </h1>

      <Router>
          <Switch>
                <Route exact path="/"> 
                
                <Home></Home>

                </Route>

                <Route path="/acerca" component={Acerca}/>
                <Route path="/contacto" component={Contacto}/>
                <Route path="/usuario/:nombre/:edad/:email" component={Usuario} /> 
                <Route path="/producto" component={Producto} /> 

                  <Route path="/about"> <Redirect to="/acerca"/> </Route>

                <Route path="*" component={Error404}/>           
         </Switch>
      </Router>
     
    </div>
  );
}

export default App;

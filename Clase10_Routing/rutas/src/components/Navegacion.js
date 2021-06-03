import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navegacion = () => {
    return (

        <nav>

            <ol>
                <li>
                    <span>Enlaces clasicos</span>
                    <a href="/contacto"> Contacto </a>
                    <a href="/acerca"> Acerca </a>
                    <a href="/"> Home </a>
                </li>

                <li>
                    <span>Componentes Link</span>
                    <Link to="/contacto"> Contacto </Link>
                    <Link to="/acerca"> Acerca </Link>
                    <Link to="/"> Home </Link>
                    <Link to="/usuario/Juan/30/Juancito@gmail.com"> Juan </Link>
                    <Link to="/producto/?id=1000&precio=25">Producto 1000</Link>
                </li>

                <li>
                    <span>Componentes NavLink</span>
                    <NavLink  activeClassName="active" exact to="/contacto"> Contacto </NavLink>
                    <NavLink activeClassName="active" exact to="/acerca"> Acerca </NavLink>
                    <NavLink activeClassName="active" exact to="/"> Home </NavLink>
                </li>

                




            </ol>

        </nav>


    );
}

export default Navegacion;
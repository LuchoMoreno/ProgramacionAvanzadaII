import React from 'react';
import logo from '../assets/logoPeliculas.png'

const Header = ({children}) => {

    /*
    const style = {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        background: "linear-gradient(#e66465, #9198e5)",
    }
*/
    const style2 = {
        height:"200px",
    }



    return ( 

        <header style = {{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            background: "linear-gradient(#e66465, #9198e5)",
            padding: "1rem"
        }}>

        <img style={style2} src={logo} alt="logoPelicula"/>

        <h1 className="title"> {children} </h1>

        </header>

     );
}
 
export default Header;
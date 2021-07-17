import React from 'react';
import { Link } from 'react-router-dom';



const Navegacion = () => {

    return (
        <div className="nav">
            
                <ul> <Link to="/login"> LOGIN </Link> </ul>
                <ul> <Link to="/registro"> REGISTRO </Link> </ul>
                <ul> <Link to="/"> HOME </Link> </ul>
        </div>
    )
}

export default Navegacion;
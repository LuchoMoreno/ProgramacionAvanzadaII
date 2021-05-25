import React from 'react';


const Pokemon = ({pokemon}) => {

    const {id, name, avatar} = pokemon;

    return (  

        <figure>
            <img src={avatar} alt={`imagen ${name}`}/>
            <figcaption>{name}</figcaption>
        </figure>



    );
}
 
export default Pokemon;
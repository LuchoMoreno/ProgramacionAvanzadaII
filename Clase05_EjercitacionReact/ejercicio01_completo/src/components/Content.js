import React, { Component } from 'react';

import Carrera from './Carrera'

const Content = ({carreras}) => {
    return ( 

        <>
        {
        carreras.map((c, index)=> <Carrera key={index} carrera={c}/>)
        }

        </>

     );
}
 
export default Content;
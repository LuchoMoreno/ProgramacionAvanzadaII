import React, { Component } from 'react';

import Carrera from './Carrera'

const Content = (props) => {
    return ( 

        <>
        <Carrera nombre={props.carrera1.nombre} cantidad={props.cantidad1.materias} />
        <Carrera nombre={props.carrera2.nombre} cantidad={props.cantidad2.materias} />
        <Carrera nombre= {props.carrera3.nombre} cantidad={props.cantidad3.materias} />
        </> 
     );
}
 
export default Content;
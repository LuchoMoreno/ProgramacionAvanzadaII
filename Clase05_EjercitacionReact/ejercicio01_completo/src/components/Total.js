const Total = ({carreras}) => {
    return ( 

    
    <p>
        Cantidad de Materias: 
         {
            carreras.reduce((ant, actual) => ant + actual.materias, 0)
         }
        
    </p>

     );
}
 

export default Total;

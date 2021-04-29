import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


//sfc
const  App = ({facultad}) => {


    const {titulo, carreras} = facultad;
  
  
    return ( 
  
      <div>
             <Header titulo={titulo}/>
             <Content carreras={carreras}/>
             <Total carreras={carreras}/>
      </div>
  
     );
  }


  export default App;
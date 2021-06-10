// npm i bootstrap
// npm install @material-ui/core
// npm install axios

import Formulario from './Components/Formulario';
import Header from './Components/Header';
import ListDrinks from './Components/ListDrinks';
import CategoriasProvider from './context/CategoriasContext';
import CoctelesProvider from './context/CoctelesContext';
import ModalProvider from './context/ModalContext';


function App() {
  return (
    
    <CategoriasProvider>

      <CoctelesProvider>

        <ModalProvider>

                <Header/>

                <div className="container">

                <Formulario/>


                <div className="row">

                <ListDrinks/>

                </div>


                </div>

         </ModalProvider>
    </CoctelesProvider>

  </CategoriasProvider>

  );
}

export default App;

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
/* Componentes */
import NavBarC from "./components/NavBar/Nave";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer"
// Context
import  CacheProvider  from './context/CartContext';
/* Views */
import Home from "./views/Home" 
import Contacto from "./views/Contacto"
import Dudas from "./views/Dudas"
import Sumate from "./views/Sumate"
import Nosotras from "./views/Nosotras"
import Tienda from "./views/Tienda"
import Creadorxs from "./views/Creadorxs"
import Carrito from "./views/Carrito"
import Error from "./views/Error"
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

const orangeColor = "#FFC700";

const App = () => {
  return (
    <CacheProvider>
    <Router>
      <div className="App">
       
        <NavBarC myColor={orangeColor} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<ItemListContainer />} />           
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/creadorxs" element={<Creadorxs />} />         
          <Route path="/dudas" element={<Dudas />} />
          <Route path="/sumate" element={<Sumate />} />
          <Route path="/contacto" element={<Contacto />} />  
          <Route path="/carrito" element={<Carrito />} />     
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>  
    </CacheProvider>
  );
};

export default App;


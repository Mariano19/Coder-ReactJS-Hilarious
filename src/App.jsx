import './App.css';
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          {/* importo los componentes */}

          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer />} />


          </Routes>



        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

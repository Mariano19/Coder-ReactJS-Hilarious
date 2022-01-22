import logo from './logo.svg';
import './App.css';
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* importo los componentes */}
        
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          {/* <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
             
          
        </Routes>
        


      </div>
    </BrowserRouter>
  );
}

export default App;

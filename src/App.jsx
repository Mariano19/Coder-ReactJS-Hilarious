import logo from './logo.svg';
import './App.css';
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      {/* importo los componentes */}
      
      <NavBar/>
      <ItemListContainer/>     



    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      {/* importo los componentes */}
      
      <NavBar></NavBar>
      <ItemListContainer 
        lista1 = 'item1' 
        lista2 = 'item2'   
      ></ItemListContainer>

    </div>
  );
}

export default App;

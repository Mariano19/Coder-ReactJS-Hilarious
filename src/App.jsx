import logo from './logo.svg';
import './App.css';
/* import './bootstrap/dist/css/bootstrap.min.css'; */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* importo los componentes */}
      <NavBar></NavBar>
    </div>
  );
}

export default App;

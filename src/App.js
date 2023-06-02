import logo from './logo.svg';
import './App.css';
import Heder from './components/Header/Heder';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heder></Heder>
        <Shop></Shop>
       
      </header>
    </div>
  );
}

export default App;

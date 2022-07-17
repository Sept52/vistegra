import './App.css';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Catalog />
        <Cart />
      </div>
    </div>
  );
}

export default App;

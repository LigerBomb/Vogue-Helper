import logo from './logo.svg';
import './App.css';
import mensClothingInventory from './components/clothing'
import womensClothingInventory from './components/clothing'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App()
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
export default function App() {
    return (
        <PayPalScriptProvider options={{ "client-id": Af04kwtoi3aNKBUFMLm3BMxe7MP80bVW96KKVcEMclmSsZyuiWeQHKC8jG5WYZ6EvYCuPesEg12NgeK2 }}/>
    );
}

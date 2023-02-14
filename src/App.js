import "./App.css";
import { PunsList } from "./components/PunsList/PunsList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Trocadilho Awards</h1>
        <nav className="header__nav">
          <p>LIST OF PUNS</p>
          <p>ADD PUN</p>
          <p>RANKING</p>
        </nav>
      </header>
      <PunsList />
    </div>
  );
}

export default App;

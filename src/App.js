import "./App.css";
import { Header } from "./components/Header/Header";
import { PunsForm } from "./components/PunsForm/PunsForm";
import { PunsList } from "./components/PunsList/PunsList";
import { puns } from "./puns/puns";

function App() {
  return (
    <div className="App">
      <Header />
      <PunsList puns={puns} />
      <PunsForm />
    </div>
  );
}

export default App;

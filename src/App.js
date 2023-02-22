import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { PunsForm } from "./components/PunsForm/PunsForm";
import { PunsList } from "./components/PunsList/PunsList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [currentPage, setCurrentPage] = useState("ListPuns");

  const LIST_PUNS = "ListPuns";
  const ADD_PUNS = "AddPuns";

  const punInfo = {
    date: "",
    dev: "",
    context: "",
    message: "",
    votes: 0,
  };

  const listedPuns = useLocalStorage("puns_list", punInfo);

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === LIST_PUNS && <PunsList puns={listedPuns.parsed} />}
      {currentPage === ADD_PUNS && <PunsForm puns={listedPuns} />}
    </div>
  );
}

export default App;

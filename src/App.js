import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { PunsForm } from "./components/PunsForm/PunsForm";
import { PunsList } from "./components/PunsList/PunsList";
import { Ranking } from "./components/Ranking/Ranking";
import { useInput } from "./hooks/useInput";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [formValues, setFormValues] = useState({});
  const [listPage, setListPage] = useState(true);
  const [addPage, setAddPage] = useState(false);
  const [rankingPage, setRankingPage] = useState(false)

  const punInfo = {
    date: "",
    dev: "",
    context: "",
    message: "",
    votes: 0,
  };

  const listedPuns = useLocalStorage("puns_list", punInfo);

  const {
    value: date,
    setValue: setDate,
    handleInput: handleDate,
  } = useInput(formValues.date ?? "00/00/00");

  const {
    value: dev,
    setValue: setDev,
    handleInput: handleDev,
  } = useInput(formValues.dev ?? "");

  const {
    value: context,
    setValue: setContext,
    handleInput: handleContext,
  } = useInput(formValues.dev ?? "");

  const {
    value: message,
    setValue: setMessage,
    handleInput: handleMessage,
  } = useInput(formValues.message ?? "");

  const resetInputValues = () => {
    setDate("");
    setContext("");
    setDev("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const elements = event.target.elements;

    const newPun = {
      date: elements.date.value,
      dev: elements.dev.value,
      context: elements.dev.value,
      message: elements.pun.value,
      votes: 0,
    };

    setFormValues(newPun);
    listedPuns.saveValue(newPun);

    resetInputValues();
  };

  return (
    <div className="App">
      <Header setListPage={setListPage} setAddPage={setAddPage} setRankingPage={setRankingPage} />
      {listPage && <PunsList puns={listedPuns.parsed} />}
      {addPage && (
        <PunsForm
          date={date}
          handleDate={handleDate}
          dev={dev}
          handleDev={handleDev}
          context={context}
          handleContext={handleContext}
          message={message}
          handleMessage={handleMessage}
          handleSubmit={handleSubmit}
        />
      )}
      {rankingPage && <Ranking puns={listedPuns.parsed} />}      
    </div>
  );
}

export default App;

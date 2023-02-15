import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { PunsForm } from "./components/PunsForm/PunsForm";
import { PunsList } from "./components/PunsList/PunsList";
import { useInput } from "./hooks/useInput";
import { puns } from "./puns/puns";

function App() {
  const [formValues, setFormValues] = useState({});

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
    value: pun,
    setValue: setPun,
    handleInput: handlePun,
  } = useInput(formValues.pun ?? "");

  const handleSubmit = (event) => {
    event.preventDefault()

    const elements = event.target.elements;

    const newPun = {
      date: elements.date.value,
      dev: elements.dev.value,
      context: elements.dev.value,
      pun: elements.pun.value,
    };

    setFormValues(newPun);
    console.log(newPun);
  };

  return (
    <div className="App">
      <Header />
      <PunsList puns={puns} />
      <PunsForm
        date={date}
        handleDate={handleDate}
        dev={dev}
        handleDev={handleDev}
        context={context}
        handleContext={handleContext}
        pun={pun}
        handlePun={handlePun}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

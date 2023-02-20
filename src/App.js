import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { PunsForm } from "./components/PunsForm/PunsForm";
import { PunsList } from "./components/PunsList/PunsList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [formValues, setFormValues] = useState({});
  const [listPage, setListPage] = useState(true);
  const [addPage, setAddPage] = useState(false);

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
      <Header setListPage={setListPage} setAddPage={setAddPage} />
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
    </div>
  );
}

export default App;

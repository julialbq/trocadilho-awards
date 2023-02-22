import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import "./PunsForm.css";

export const PunsForm = ({ listedPuns }) => {
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
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Add New Pun</h2>
        <div className="form__division">
          <label className="form__label" name="date">
            Date:
            <input
              className="form__input"
              type="date"
              id="date"
              required
              value={date}
              onChange={handleDate}
            />
          </label>
          <label className="form__label" name="dev">
            Dev:
            <input
              className="form__input"
              type="text"
              id="dev"
              required
              value={dev}
              onChange={handleDev}
            />
          </label>
        </div>
        <label className="form__label" name="context">
          Context:
          <input
            className="form__input"
            type="text"
            id="context"
            required
            value={context}
            onChange={handleContext}
          />
        </label>
        <label className="form__label" name="pun">
          Pun:
          <input
            className="form__input"
            type="text"
            id="pun"
            required
            value={message}
            onChange={handleMessage}
          />
        </label>
        <div className="form__button-wrapper">
          <button className="form__button" type="submit">
            Add Pun
          </button>
        </div>
      </form>
    </div>
  );
};

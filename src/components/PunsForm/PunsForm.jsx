import "./PunsForm.css";

export const PunsForm = () => {
  return (
    <div className="form__wrapper">
      <form className="form">
        <h2 className="title">Add New Pun</h2>
        <div className="form__division">
          <label className="form__label" name="date">
            Date:
            <input className="form__input" type={Date} id="date" />
          </label>
          <label className="form__label" name="dev">
            Dev:
            <input className="form__input" type={Text} id="dev" />
          </label>
        </div>
        <label className="form__label" name="context">
          Context:
          <input className="form__input" type={Text} id="context" />
        </label>
        <label className="form__label" name="pun">
          Pun:
          <input className="form__input" type={Text} id="pun" />
        </label>
        <button className="form__button" type="submit">
          Add Pun
        </button>
      </form>
    </div>
  );
};

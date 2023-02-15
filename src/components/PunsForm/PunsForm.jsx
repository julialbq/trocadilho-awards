import "./PunsForm.css";

export const PunsForm = ({
  date,
  handleDate,
  dev,
  handleDev,
  context,
  handleContext,
  pun,
  handlePun,
  handleSubmit,
}) => {
  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Add New Pun</h2>
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
            value={pun}
            onChange={handlePun}
          />
        </label>
        <button className="form__button" type="submit">
          Add Pun
        </button>
      </form>
    </div>
  );
};

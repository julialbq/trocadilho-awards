import "./Header.css";

export const Header = ({ setListPage, setAddPage }) => {
  return (
    <header className="header">
      <h1 className="header__title">Trocadilho Awards</h1>
      <nav className="header__nav">
        <button
          className="header__button"
          onClick={() => {
            setListPage(true);
            setAddPage(false);
          }}
        >
          LIST OF PUNS
        </button>
        <button
          className="header__button"
          onClick={() => {
            setListPage(false);
            setAddPage(true);
          }}
        >
          ADD PUN
        </button>
        <button className="header__button">RANKING</button>
      </nav>
    </header>
  );
};

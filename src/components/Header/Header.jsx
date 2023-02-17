import "./Header.css";

export const Header = ({ setListPage, setAddPage, setRankingPage }) => {
  return (
    <header className="header">
      <h1 className="header__title">Trocadilho Awards</h1>
      <nav className="header__nav">
        <button
          className="header__button"
          onClick={() => {
            setListPage(true);
            setAddPage(false);
            setRankingPage(false);
          }}
        >
          LIST OF PUNS
        </button>
        <button
          className="header__button"
          onClick={() => {
            setListPage(false);
            setAddPage(true);
            setRankingPage(false);
          }}
        >
          ADD PUN
        </button>
        <button
          className="header__button"
          onClick={() => {
            setRankingPage(true);
            setListPage(false);
            setAddPage(false);
          }}
        >
          RANKING
        </button>
      </nav>
    </header>
  );
};

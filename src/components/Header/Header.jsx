import "./Header.css";

export const Header = ({ setCurrentPage}) => {
  return (
    <header className="header">
      <h1 className="header__title">Trocadilho Awards</h1>
      <nav className="header__nav">
        <button
          className="header__button"
          onClick={() => {
            // 
            setCurrentPage('ListPuns')
          }}
        >
          LIST OF PUNS
        </button>
        <button
          className="header__button"
          onClick={() => {
            // setListPage(false);
            // setAddPage(true);
            setCurrentPage('AddPuns')
          }}
        >
          ADD PUN
        </button>
        <button className="header__button">RANKING</button>
      </nav>
    </header>
  );
};

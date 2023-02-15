import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Trocadilho Awards</h1>
      <nav className="header__nav">
        <p>LIST OF PUNS</p>
        <p>ADD PUN</p>
        <p>RANKING</p>
      </nav>
    </header>
  );
};

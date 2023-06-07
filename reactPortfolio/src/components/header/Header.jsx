import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#" className="header__logo">Volovik.</a>
          <div className="header__burger">
            <span></span>
          </div>
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <a href="" className="header__link">Home</a>
              </li>
              <li>
                <a href="" className="header__link">About</a>
              </li>
              <li>
                <a href="" className="header__link">Skills</a>
              </li>
              <li>
                <a href="" className="header__link">Portfolio</a>
              </li>
              <li>
                <a href="" className="header__link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.css";

const LIST = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/skills",
    title: "Skills",
  },
  {
    to: "/portfolio",
    title: "Portfolio",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

const Header = ({ handleToggleTheme, isCanvas2Visible }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? "active" : ""}`}>
      <div className="container">
        <div className="header__body">
          <a
            className="bgswithc header__logo"
            id="theme-toggle"
            onClick={handleToggleTheme}
            to=""
          >
            VOLOVIK.
          </a>

          <div
            className={`header__burger ${isActive ? "active" : ""}`}
            onClick={handleBurgerClick}
          >
            <span className="btt"></span>
          </div>

          <nav className={`header__menu ${isActive ? "active" : ""}`}>
            <ul className="header__list">
              {LIST.map((link) => {
                <li key={link.to}>
                  <Link
                    className={`header__link ${
                      location.pathname === link.to ? "active" : ""
                    }`}
                    to={link.to}
                  >
                    {link.title}
                  </Link>
                </li>;
              })}
            </ul>
          </nav>
        </div>
      </div>

      <style>
        {`
          #gradient-canvas2 {
            visibility: ${isCanvas2Visible ? "visible" : "hidden"};
          }
        `}
      </style>
    </header>
  );
};

Header.propTypes = {
  handleToggleTheme: PropTypes.func.isRequired,
  isCanvas2Visible: PropTypes.bool.isRequired,
};

export default Header;

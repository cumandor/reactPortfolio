import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ handleToggleTheme, isCanvas2Visible }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="header__body">
          <a className='bgswithc header__logo' id="theme-toggle" onClick={handleToggleTheme} to="">VOLOVIK.</a>
          <div
            className={`header__burger ${isActive ? 'active' : ''}`}
            onClick={handleBurgerClick}
          >
            <span className='btt'></span>
          </div>
          <nav className={`header__menu ${isActive ? 'active' : ''}`}>
            <ul className="header__list">
              <li>
                <Link to="/" className={`header__link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`header__link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
              </li>
              <li>
                <Link to="/skills" className={`header__link ${location.pathname === '/skills' ? 'active' : ''}`}>Skills</Link>
              </li>
              <li>
                <Link to="/portfolio" className={`header__link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className={`header__link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style>
        {`
          #gradient-canvas2 {
            visibility: ${isCanvas2Visible ? 'visible' : 'hidden'};
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

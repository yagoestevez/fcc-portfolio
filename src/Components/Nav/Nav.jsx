import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            yago
            <strong>estévez</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;

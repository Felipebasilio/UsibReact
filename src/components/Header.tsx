import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="site-header py-1 sticky-top my-0">
      <nav className="navbar navbar-expand navbar-dark d-flex justify-content-start">

          <NavLink to="/" className="px-5"  activeClassName="active" exact>
            USIB
          </NavLink>
          <NavLink to="/listQuotes" className="px-4"  activeClassName="active" exact>
            Orçamentos
          </NavLink>

      </nav>
    </header>
  );
};

export default Header;
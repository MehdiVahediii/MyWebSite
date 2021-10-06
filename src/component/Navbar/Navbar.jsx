import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul className="navbar-nav p-4 ">
    <Link to="/">
      <li className="nav-item mx-2">
        <>صفحه اصلی</>
      </li>
    </Link>
    <Link to="/about">
      <li className="nav-item mx-2">
        <>رزومه من</>
      </li>
    </Link>
    <Link to="/contact">
      <li className="nav-item mx-2">
        <>ارتباط با من</>
      </li>
    </Link>
  </ul>
);
export default NavBar;

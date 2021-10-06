import React from 'react';
import NavBar from '../Navbar/Navbar';

const Header = () => (
  <div className="col-12 ">
    <nav className="navbar navbar-expand navbar-light bg-light ">
      <div className="container-fluid ">
        <span>سایت شخصی من</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <NavBar />
        </div>
      </div>
    </nav>
  </div>
);
export default Header;

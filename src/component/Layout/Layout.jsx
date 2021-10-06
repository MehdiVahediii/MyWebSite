import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className="m-0 p-0">
    <Header />
    <div className="d-flex justify-content-center m-3">{children}</div>
    <Footer />
  </div>
);
export default Layout;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        
        
        <div className="logo">
          <span className="dot"></span>
          DRAVZ'S
        </div>

        
        <nav className={`nav-links ${menuActive ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuActive(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuActive(false)}>ABOUT US</Link>
          <Link to="/menu" onClick={() => setMenuActive(false)}>MENU</Link>
          <Link to="/services" onClick={() => setMenuActive(false)}>SERVICES</Link>
          <Link to="/cart" onClick={() => setMenuActive(false)}>CART</Link>
          <Link to="/contact" onClick={() => setMenuActive(false)}>CONTACT</Link>
        </nav>

        
        <button className="nav-btn">RESERVATION</button>

        
        <div 
          className={`menu-toggle ${menuActive ? "active" : ""}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

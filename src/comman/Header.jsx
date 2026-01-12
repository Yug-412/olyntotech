import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/img/olynto-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Olynto Logo" />
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/casestudy" onClick={() => setMenuOpen(false)}>
            Case Studies
          </NavLink>

          <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact & Strategy Call
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;

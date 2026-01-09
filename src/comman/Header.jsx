import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/img/olynto-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Olynto Logo" />
        </div>

        {/* NAV */}
        <nav className="nav">
          <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
            service
          </NavLink>
         
    <NavLink to="/casestudy">Case Studies</NavLink>
        
  
           <NavLink to="/about-us">About Us</NavLink>
             <NavLink to="/contact-us">Contact & Strategy Call</NavLink> 
        </nav>

      </div>
    </header>
  );
};

export default Header;

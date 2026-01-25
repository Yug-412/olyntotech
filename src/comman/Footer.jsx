import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* FOOTER CONTENT */}
      <div className="footer-content">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <img src="/img/olynto-logo.png" alt="Olynto Logo" />
            <p className="footer-tagline">
              Let’s Build Something Great Together
            </p>
            <p className="footer-desc">
              Enterprise AI automation and autonomous operational systems.            </p>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Buisness Inquiries</h4>
            <p>📧 contact@olyntotech.com</p>
          </div>

          {/* HOURS */}
          <div className="footer-hours">
            <h4>Business Hours</h4>
            <p>Mon – Fri</p>
            <p>9:00 AM – 6:00 PM ET</p>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">

          <p className="footer-copy">
            © 2025 Olynto Technologies LLC. All rights reserved.
            Registered in Wyoming, USA.
          </p>

          {/* LEGAL LINKS */}
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/disclaimer">Disclaimer</Link>
            {/* <span>|</span> */}
            {/* <Link to="/cookie-policy">Cookie Policy</Link> */}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

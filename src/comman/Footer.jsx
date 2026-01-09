import React from "react";
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
              Reach out for AI automation, ERP, cybersecurity,
              and custom software solutions.
            </p>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 contact@olyntotech.com</p>
            {/* <p>📞 </p>
            <p>📞 </p> */}
          </div>

          {/* HOURS */}
          <div className="footer-hours">
            <h4>Business Hours</h4>
            <p>Mon – Sat</p>
            <p>10:00 AM – 6:00 PM IST</p>
            <p>(GMT +5:30)</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © 2025 Olynto Technologies LLC. All rights reserved.
            Registered in Wyoming, USA.
          </p>

          {/* <div className="footer-socials">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;

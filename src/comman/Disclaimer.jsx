import React from "react";
import "./private.css";
import LegalBackButton from "./LegalBackButton";

function Disclaimer() {
  return (
    <section className="legal-page">
        
      {/* BACK BUTTON */}
      <LegalBackButton to="/contact-us" label="Back" />
      <h1>Disclaimer</h1>
      <p className="legal-updated">Last updated: December 2025</p>

      <h2>1. General Information</h2>
      <p>
        The information provided on this website is for general business and
        informational purposes only. It does not constitute professional,
        legal, financial, medical, or regulatory advice.
      </p>

      <h2>2. No Professional Advice</h2>
      <p>
        Olynto Technologies LLC (“Olynto”) does not provide:
      </p>
      <ul>
        <li>Legal advice</li>
        <li>Financial or accounting advice</li>
        <li>Medical or clinical advice</li>
        <li>Investment or regulatory advice</li>
      </ul>
      <p>
        All decisions made based on information from this website are the
        responsibility of the user.
      </p>

      <h2>3. No Guarantees</h2>
      <p>
        Olynto makes no representations or warranties regarding:
      </p>
      <ul>
        <li>Business performance</li>
        <li>Financial outcomes</li>
        <li>Cost reductions</li>
        <li>Operational efficiency improvements</li>
      </ul>
      <p>
        Results may vary based on client implementation, data quality, and
        operational context.
      </p>

      <h2>4. Healthcare Disclaimer</h2>
      <p>
        Olynto provides administrative and operational automation services only.
      </p>
      <p>We do not:</p>
      <ul>
        <li>Access or process patient health information (PHI)</li>
        <li>Interact with clinical systems</li>
        <li>Provide medical services or healthcare advice</li>
      </ul>

      <h2>5. Third-Party Tools & Links</h2>
      <p>
        This website may reference or link to third-party platforms. Olynto is
        not responsible for the content, availability, or practices of external
        sites or services.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Olynto shall not be liable for
        any direct or indirect damages arising from the use of this website or
        reliance on its content.
      </p>

      <h2>7. Changes</h2>
      <p>
        Olynto may update this Disclaimer at any time without notice. Continued
        use of the website indicates acceptance of any changes.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions regarding this Disclaimer, contact us at:
      </p>
      <p>
        <strong>Email:</strong> contact@olyntotech.com
      </p>
    </section>
  );
}

export default Disclaimer;

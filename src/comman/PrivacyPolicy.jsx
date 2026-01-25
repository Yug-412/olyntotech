import { useNavigate } from "react-router-dom";
import "./private.css";
import LegalBackButton from "./LegalBackButton";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <section className="legal-page">

      {/* BACK BUTTON */}
      <LegalBackButton to="/contact-us" label="Back" />
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: December 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Olynto Technologies LLC (“Olynto”, “we”, “our”, “us”) respects your privacy
        and is committed to protecting the information you share with us. This
        Privacy Policy explains how we collect, use, and safeguard information
        when you visit our website or communicate with us.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect limited business-related information, including:</p>
      <ul>
        <li>Name</li>
        <li>Business email address</li>
        <li>Company name</li>
        <li>Job title</li>
        <li>Technical data such as IP address and browser type</li>
        <li>Cookies used for basic website functionality</li>
      </ul>
      <p>We do not collect sensitive personal information.</p>

      <h2>3. How We Use Information</h2>
      <p>Collected information may be used to:</p>
      <ul>
        <li>Respond to inquiries and requests</li>
        <li>Communicate about our services</li>
        <li>Improve website performance and usability</li>
        <li>Maintain internal business records</li>
        <li>Comply with applicable legal obligations</li>
      </ul>
      <p>We do not sell or rent personal data.</p>

      <h2>4. Cookies</h2>
      <p>
        Our website may use cookies to analyze traffic and improve user
        experience. You may disable cookies through your browser settings.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        Information may be shared with trusted service providers solely for
        business operations such as hosting, analytics, or communication tools.
        These providers are contractually obligated to protect your data.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and organizational
        safeguards to protect information against unauthorized access,
        disclosure, or misuse.
      </p>

      <h2>7. Healthcare & Regulated Data</h2>
      <p>
        Olynto provides administrative and operational automation services only.
        We do not access, store, or process patient health information (PHI),
        financial records, or other regulated personal data.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of those websites.
      </p>

      <h2>9. Your Rights</h2>
      <p>You may request to:</p>
      <ul>
        <li>Access your information</li>
        <li>Correct inaccurate data</li>
        <li>Opt out of communications</li>
      </ul>
      <p>Requests can be sent to the contact email below.</p>

      <h2>10. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page.
      </p>

      <h2>11. Contact Information</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <p>
        <strong>Email:</strong> contact@olyntotech.com
      </p>
    </section>
  );
}

export default PrivacyPolicy;

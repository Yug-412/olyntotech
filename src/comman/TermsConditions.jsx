import React from "react";
import "./private.css";
import LegalBackButton from "./LegalBackButton";

function TermsConditions() {
    return (

        <section className="legal-page">
           <LegalBackButton to="/contact-us" label="Back" />
            <h1>Terms & Conditions</h1>
            <p className="legal-updated">Last updated: December 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using this website, you agree to be bound by these Terms
                & Conditions. If you do not agree, please do not use this website.
            </p>

            <h2>2. About Olynto</h2>
            <p>
                Olynto Technologies LLC (“Olynto”, “we”, “our”, “us”) provides operational
                automation, workflow optimization, and internal systems services for
                businesses.
            </p>
            <p>
                We do not provide legal, financial, medical, or investment advice.
            </p>

            <h2>3. Scope of Services</h2>
            <p>All services offered by Olynto are:</p>
            <ul>
                <li>Administrative and operational in nature</li>
                <li>Non-clinical</li>
                <li>Non-regulatory</li>
                <li>Non-advisory</li>
            </ul>
            <p>
                Specific services, timelines, and deliverables are defined separately in
                a written agreement or Statement of Work (SOW).
            </p>

            <h2>4. No Guarantees</h2>
            <p>Olynto does not guarantee:</p>
            <ul>
                <li>Revenue growth</li>
                <li>Cost savings</li>
                <li>Business outcomes</li>
                <li>Performance metrics</li>
            </ul>
            <p>
                Results may vary depending on client operations, systems, and
                implementation.
            </p>

            <h2>5. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
                <li>Providing accurate information</li>
                <li>Granting appropriate access</li>
                <li>Maintaining compliance with applicable laws</li>
                <li>Using delivered systems responsibly</li>
            </ul>

            <h2>6. Healthcare & Regulated Industries</h2>
            <p>
                Olynto provides administrative and operational support only.
            </p>
            <p>We do not:</p>
            <ul>
                <li>Access patient health information (PHI)</li>
                <li>Access EMR or EHR systems</li>
                <li>Provide clinical or medical services</li>
                <li>Make financial or regulatory decisions</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
                All website content, materials, and systems developed by Olynto remain
                the intellectual property of Olynto unless otherwise stated in a written
                agreement. Unauthorized use is prohibited.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
                To the maximum extent permitted by law:
            </p>
            <ul>
                <li>
                    Olynto shall not be liable for indirect, incidental, or consequential
                    damages
                </li>
                <li>
                    Liability is limited to fees paid for services rendered
                </li>
            </ul>

            <h2>9. Third-Party Tools</h2>
            <p>
                Olynto may use third-party platforms and tools. Olynto is not responsible
                for outages, changes, or failures of third-party services.
            </p>

            <h2>10. Confidentiality</h2>
            <p>
                Any confidential information shared will be handled responsibly and in
                accordance with applicable confidentiality agreements.
            </p>

            <h2>11. Termination</h2>
            <p>
                Olynto reserves the right to suspend or terminate website access for
                misuse or violation of these Terms & Conditions.
            </p>

            <h2>12. Governing Law</h2>
            <p>
                These Terms & Conditions are governed by the laws of the State of
                Wyoming, United States.
            </p>

            <h2>13. Updates</h2>
            <p>
                Olynto may update these Terms & Conditions at any time. Continued use of
                the website constitutes acceptance of changes.
            </p>

            <h2>14. Contact</h2>
            <p>
                For questions regarding these Terms & Conditions, contact us at:
            </p>
            <p>
                <strong>Email:</strong> contact@olyntotech.com
            </p>
        </section>
    );
}

export default TermsConditions;

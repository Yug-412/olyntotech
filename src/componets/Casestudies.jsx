import React from "react";
import "./Casestudy.css";

function Casestudies() {
  return (
    <>
     {/* ================= CASE STUDIES HERO SECTION ================= */}
<section className="case-hero case-video">
  
  {/* Background Video */}
  <video
    className="case-bg-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video/vd1.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="case-overlay"></div>

  {/* Content */}
  <div className="case-container">
    <h2 className="case-title">
      Real AI Deployments. Measurable Business Impact.
    </h2>

    <p className="case-subtitle">
      Delivering AI, Automation, Cybersecurity & Modern Web Solutions for
      Global Clients
    </p>

    <p className="case-desc">
      At OlyntoTech, we deploy <strong>autonomous Real AI agents</strong>
      into real enterprise environments to replace manual operations,
      finance processes, and back-office workflows.
    </p>

    <p className="case-note">
      To respect client confidentiality, all case studies are{" "}
      <strong>anonymous and outcome-focused</strong>, following enterprise
      standards.
    </p>
  </div>
</section>


       <section className="cs-auto">
      <div className="cs-container">

        {/* HEADER */}
        <div className="cs-header fade-up">
          <h3>CUSTOM ENTERPRISE AI AUTOMATION</h3>
          <div className="cs-meta">
            <span><strong>Industry:</strong> Professional Services</span>
            <span><strong>Company Size:</strong> 120+ employees</span>
            <span><strong>Region:</strong> US-based</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="cs-grid">

          {/* LEFT CONTENT */}
          <div className="cs-content fade-left">

            <div className="cs-block">
              <h4>Problem</h4>
              <ul>
                <li>Manual AP/AR workflows</li>
                <li>Spreadsheet-driven reconciliations</li>
                <li>Delayed cash-flow visibility</li>
                <li>High dependency on accounting staff</li>
              </ul>
            </div>

            <div className="cs-block">
              <h4>AI Solutions Deployed</h4>
              <ul>
                <li>AI Finance & Accounting Agents</li>
                <li>Automated invoice processing</li>
                <li>Continuous reconciliation & reporting</li>
                <li>Compliance checks and alerts</li>
              </ul>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="cs-visual fade-right">
            <img src="/img/img1.jpg" alt="AI Finance Dashboard" />
            <img src="/img/img2.jpg" alt="Automation Analytics" />
          </div>

        </div>

        {/* RESULTS */}
        <div className="cs-results fade-up">
          <h4>Results <span>(within 60–90 days)</span></h4>

          <div className="cs-metrics">
            <div className="metric">
              <strong>30%</strong>
              <span>Reduction in process delays</span>
            </div>

            <div className="metric">
              <strong>100%</strong>
              <span>Audit logs & traceability</span>
            </div>

            <div className="metric">
              <strong>24/7</strong>
              <span>Autonomous execution</span>
            </div>

            <div className="metric">
              <strong>↑</strong>
              <span>Improved compliance control</span>
            </div>
          </div>

          <p className="cs-status">
            <strong>Status:</strong> Scaling to additional workflows
          </p>
        </div>

      </div>
    </section>
    <section className="ai-finance-case">
      <div className="ai-finance-container">

        {/* HEADER */}
        <div className="ai-finance-header slide-up">
          <h3>AI FINANCE & ACCOUNTING AGENTS (AI CFO)</h3>

          <div className="ai-finance-meta">
            <span><strong>Industry:</strong> Professional Services</span>
            <span><strong>Company Size:</strong> ~80 employees</span>
            <span><strong>Region:</strong> US-based</span>
          </div>
        </div>

        {/* IMAGES */}
        <div className="ai-finance-images fade-in">
          <img src="/img/img5.jpg" alt="AI CFO Dashboard" />
          <img src="/img/img6.jpg" alt="Finance Automation View" />
        </div>

        {/* CONTENT GRID */}
        <div className="ai-finance-grid">

          <div className="ai-finance-box">
            <h4>Problem</h4>
            <ul>
              <li>Manual AP/AR workflows</li>
              <li>Spreadsheet-driven reconciliations</li>
              <li>Delayed cash-flow visibility</li>
              <li>High dependency on accounting staff</li>
            </ul>
          </div>

          <div className="ai-finance-box">
            <h4>AI Solutions Deployed</h4>
            <ul>
              <li>AI Finance & Accounting Agents</li>
              <li>Automated invoice processing</li>
              <li>Continuous reconciliation & reporting</li>
              <li>Compliance checks and alerts</li>
            </ul>
          </div>

          <div className="ai-finance-box">
            <h4>Roles Replaced</h4>
            <ul>
              <li>2× Accounting staff</li>
              <li>Manual financial review processes</li>
            </ul>
          </div>

        </div>

        {/* RESULTS */}
        <div className="ai-finance-results slide-up">
          <h4>Results <span>(Within 60–90 Days)</span></h4>

          <div className="result-bars">
            <div>
              <label>Finance workload reduction</label>
              <span>42%</span>
            </div>
            <div>
              <label>Cash-flow visibility</label>
              <span>Near real-time</span>
            </div>
            <div>
              <label>Financial errors</label>
              <span>Significantly reduced</span>
            </div>
            <div>
              <label>Monthly closes</label>
              <span>Faster cycles</span>
            </div>
          </div>
        </div>

      </div>
    </section>

      <section className="ai-ops-case">
      <div className="ai-ops-container">

        {/* HEADER */}
        <div className="ai-ops-header reveal">
          <h3>AI OPERATIONS AGENTS (AI COO)</h3>
          <div className="ai-ops-meta">
            <span><strong>Industry:</strong> Mid-Market SaaS</span>
            <span><strong>Company Size:</strong> ~120 employees</span>
            <span><strong>Region:</strong> North America</span>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="ai-ops-layout">

          {/* LEFT – STORY FLOW */}
          <div className="ai-ops-flow">

            <div className="flow-step">
              <h4>Operational Challenges</h4>
              <ul>
                <li>Heavy reliance on operations coordinators</li>
                <li>Manual task tracking across teams</li>
                <li>Delayed reporting and approvals</li>
                <li>Rising operational costs</li>
              </ul>
            </div>

            <div className="flow-step">
              <h4>AI Solutions Deployed</h4>
              <ul>
                <li>Autonomous AI Operations Agents</li>
                <li>Automated task routing & prioritization</li>
                <li>Real-time operational dashboards</li>
                <li>Exception detection & escalation logic</li>
              </ul>
            </div>

            <div className="flow-step">
              <h4>Roles Replaced</h4>
              <ul>
                <li>3× Operations Analysts</li>
                <li>1× Operations Coordinator</li>
              </ul>
            </div>

          </div>

          {/* RIGHT – VISUAL STACK */}
          <div className="ai-ops-visual reveal">
            <img src="/img/img3.jpg" alt="AI Operations Dashboard" />
            <img src="/img/img4.jpg" alt="Operations Performance View" />
          </div>

        </div>

        {/* RESULTS */}
        <div className="ai-ops-impact reveal">
          <h4>Results <span>(Within 90 Days)</span></h4>

          <div className="impact-grid">
            <div className="impact-item">38% reduction in operational costs</div>
            <div className="impact-item">1,200+ hours saved annually</div>
            <div className="impact-item">Faster execution cycles</div>
            <div className="impact-item">Real-time visibility into operations</div>
          </div>

          <p className="ai-ops-status">
            <strong>Status:</strong> Ongoing expansion across departments
          </p>
        </div>

      </div>
    </section>
    </>
  );
}

export default Casestudies;

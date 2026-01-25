import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (<>
    <section className="services-section video-bg">

      {/* BACKGROUND VIDEO */}
      <video
        className="services-bg-video"
        autoPlay

        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dtzsyzgam/video/upload/v1768907155/vd2_hpj7pc.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY FOR READABILITY */}
      <div className="services-bg-overlay"></div>

      <div className="services-container">

        {/* HEADER */}
        <div className="services-header fade-in">
          <h1>Enterprise AI Agents That Replace Manual Work</h1>
          <p>
            At Olynto Technologies, we design and deploy
            <strong> autonomous AI agents</strong> that take over repetitive,
            rule-based, and decision-driven work across operations, finance,
            and back-office functions.
          </p>

          <ul className="services-points">
            <li>We don’t sell software licenses</li>
            <li>We deliver measurable business outcomes</li>
          </ul>
        </div>

        {/* CORE OFFERING */}
        <div className="services-core">

          <h2 className="section-title">Our Core Offering</h2>
          <p className="section-subtitle">
            Enterprise AI Agent Solutions
          </p>

          <div className="services-grid">

            <div className="service-card slide-up">
              <h3>Execute Real Work</h3>
              <p>AI agents that perform tasks  not just assist humans.</p>
            </div>

            <div className="service-card slide-up delay-1">
              <h3>System Integration</h3>
              <p>Seamless integration with ERP, CRM, databases, and APIs.</p>
            </div>

            <div className="service-card slide-up delay-2">
              <h3>Enterprise Security</h3>
              <p>Role-based access, audit logs, and secure architecture.</p>
            </div>

            <div className="service-card slide-up delay-3">
              <h3>ROI in 90 Days</h3>
              <p>Designed to show real business value fast.</p>
            </div>

          </div>
        </div>

      </div>
    </section>


    <section className="aiops-section">
      {/* FULL-WIDTH HEADER */}
      <div className="aiops-header">
        <h2>AI Operations Agents (AI COO)</h2>
        <p className="aiops-subtitle">Autonomous Enterprise Operations</p>
        <p className="aiops-desc">
          Autonomous AI agents that run enterprise operations —
          coordinating workflows, tracking execution, and delivering
          real-time operational insight.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="aiops-container">

        {/* VIDEO */}
        <div className="aiops-video-wrap">
          <video
            className="aiops-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/ai1.mp4" type="video/mp4" />
          </video>
          <div className="aiops-glow"></div>
        </div>

        {/* CONTENT */}
        <div className="aiops-content">
          <div className="aiops-block">
            <h4>What the AI Manages</h4>
            <ul>
              <li>Workflow orchestration across teams</li>
              <li>Operational dashboards & reporting</li>
              <li>Exceptions, escalations, and alerts</li>
              <li>ERP, CRM, and internal system automation</li>
            </ul>
          </div>

          <div className="aiops-block highlight">
            <h4>Business Impact</h4>
            <ul>
              <li>30–50% reduction in operational costs</li>
              <li>Faster execution cycles</li>
              <li>Lower manual error rates</li>
              <li>Real-time operational visibility</li>
            </ul>
          </div>
        </div>

      </div>
    </section>


    {/* // 3rd section */}
    <section className="aifin-section">
      <div className="aifin-container">

        {/* HEADER */}
        <div className="aifin-header">
          <span className="aifin-eyebrow">AI CFO PLATFORM</span>

          <h2>
            AI Finance & Accounting Agents
            <span className="aifin-gradient"> (AI CFO)</span>
          </h2>

          <p className="aifin-subtitle">Autonomous Finance Operations</p>

          <p className="aifin-desc">
            Enterprise-grade AI agents that autonomously manage finance workflows
            with precision, compliance, and real-time intelligence.
          </p>
         
        </div>

        {/* CONTENT */}
        <div className="aifin-content-wrap">

          {/* PRIMARY CARD */}
          <div className="aifin-card aifin-card-primary">
            <h4>What We Automate</h4>
            <ul>
              <li>Accounts payable & receivable</li>
              <li>Cash-flow forecasting</li>
              <li>Reconciliations & reporting</li>
              <li>Expense monitoring</li>
              <li>Compliance checks & alerts</li>
            </ul>
          </div>

          {/* SECONDARY CARDS */}
          <div className="aifin-card-row">
            <div className="aifin-card aifin-danger">
              <h4>Replaces</h4>
              <ul>
                <li>Manual accounting operations</li>
                <li>Spreadsheet-driven workflows</li>
                <li>Error-prone human reviews</li>
              </ul>
            </div>

            <div className="aifin-card aifin-success">
              <h4>Business Impact</h4>
              <ul>
                <li>40% faster financial close</li>
                <li>Reduced operational risk</li>
                <li>Real-time financial visibility</li>
                <li>Stronger governance & control</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>






    <section className="ai-enterprise-section">
      <div className="ai-enterprise-container">

        <div className="ai-enterprise-content fade-up">

          {/* EYEBROW */}
          <span className="ai-eyebrow">
            <span className="icon pulse">⚡</span>
            Enterprise AI Solutions
          </span>

          {/* TITLE */}
          <h2 className="ai-title">
            Custom Enterprise AI Automation
          </h2>

          <p className="ai-subtitle">
            Built for complex, cross-department business operations
          </p>

          <div className="ai-enterprise-grid">

            <div className="ai-card slide-left">
              <h4><span className="icon bounce">🧠</span> Where It’s Used</h4>
              <ul>
                <li>Multi-system workflow orchestration</li>
                <li>Approval & compliance automation</li>
                <li>Industry-specific AI agents</li>
              </ul>
            </div>

            <div className="ai-card highlight slide-right">
              <h4><span className="icon glow">🚀</span> What You Get</h4>
              <ul>
                <li>Fully automated operations</li>
                <li>Deep enterprise integration</li>
                <li>Long-term operational leverage</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>




    <section className="ai-process-section">
      <div className="ai-process-container">

        <div className="ai-process-header">
          <span className="ai-eyebrow">Our Delivery Model</span>
          <h2>How We Build Enterprise AI</h2>
          <p>
            A structured, secure, and scalable approach to deploying
            autonomous AI across enterprise operations.
          </p>
        </div>

        <div className="ai-process-grid">

          <div className="ai-process-card">
            <span className="step-index">01</span>
            <h4>AI Operations Audit</h4>
            <p>
              We analyze workflows, systems, and cost centers to identify
              where AI can replace manual effort.
            </p>
          </div>

          <div className="ai-process-card">
            <span className="step-index">02</span>
            <h4>Agent Design & Architecture</h4>
            <p>
              Custom AI agents are architected with enterprise security,
              scalability, and business logic alignment.
            </p>
          </div>

          <div className="ai-process-card">
            <span className="step-index">03</span>
            <h4>Deployment & Integration</h4>
            <p>
              Agents are deployed into ERP, CRM, finance tools,
              and internal platforms.
            </p>
          </div>

          <div className="ai-process-card highlight">
            <span className="step-index">04</span>
            <h4>Monitoring & Scaling</h4>
            <p>
              We monitor performance, measure ROI, and expand
              automation across teams.
            </p>
          </div>

        </div>
        <div className="ai-process-cta">
          <p className="ai-cta-text">
            Replace Manual Work With Autonomous AI Agents
          </p>

          <div className="ai-cta-buttons">
            <Link to="/contact-us" className="btn-primary">
              Book a Free AI Operations Audit
            </Link>

            <Link to="/contact-us" className="btn-secondary">
              Talk to an AI Architect
            </Link>
          </div>
        </div>

      </div>
    </section>



  </>
  );
};

export default Services;

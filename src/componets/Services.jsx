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
              <p>AI agents that perform tasks — not just assist humans.</p>
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

      {/* ===== HEADER ===== */}
      <div className="aifin-header">
        <h2>AI Finance & Accounting Agents (AI CFO)</h2>
        <p className="aifin-subtitle">Autonomous Finance Operations</p>
        <p className="aifin-desc">
          Enterprise-grade AI agents that autonomously manage finance workflows
          with precision, compliance, and real-time intelligence.
        </p>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="aifin-layout">

        {/* LEFT CONTENT */}
        <div className="aifin-content fade-up">

          {/* FULL WIDTH CARD */}
          <div className="aifin-card full">
            <h4>What We Automate</h4>
            <ul>
              <li>Accounts payable & receivable</li>
              <li>Cash-flow forecasting</li>
              <li>Reconciliations & reporting</li>
              <li>Expense monitoring</li>
              <li>Compliance checks & alerts</li>
            </ul>
          </div>

          {/* 3 / 3 GRID */}
          <div className="aifin-card-row">

            <div className="aifin-card">
              <h4>Replaces</h4>
              <ul>
                <li>Manual accounting operations</li>
                <li>Spreadsheet-driven workflows</li>
                <li>Human-error-prone reviews</li>
              </ul>
            </div>

            <div className="aifin-card highlight">
              <h4>Business Impact</h4>
              <ul>
                <li>Faster financial close cycles</li>
                <li>Reduced operational risk</li>
                <li>Real-time financial visibility</li>
                <li>Stronger governance & control</li>
              </ul>
            </div>

          </div>

        </div>

        {/* RIGHT VIDEO */}
        <div className="aifin-video fade-up delay">
          <video autoPlay muted loop playsInline>
            <source src="/video/CFO.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>





    <section className="ai-enterprise-section">
      <div className="ai-enterprise-container">

        {/* VIDEO COLUMN */}
        <div className="ai-video-wrap fade-right">
          <video
            src="/video/AI.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="ai-video-overlay"></div>
        </div>

        {/* CONTENT COLUMN */}
        <div className="ai-enterprise-content fade-left">
          <h2>CUSTOM ENTERPRISE AI AUTOMATION</h2>

          <p className="ai-subtitle">
            AI for Complex, Cross-Department Workflows
          </p>

          <p className="ai-desc">
            For organizations with unique or high-complexity operations,
            we design <strong>custom AI agent architectures</strong> that
            integrate deeply with enterprise systems.
          </p>

          <div className="ai-block">
            <h4>Use Cases</h4>
            <ul>
              <li>Multi-system workflow automation</li>
              <li>Approval & compliance pipelines</li>
              <li>Industry-specific AI agents</li>
            </ul>
          </div>

          <div className="ai-block">
            <h4>Outcome</h4>
            <ul>
              <li>Fully automated back-office processes</li>
              <li>Deep system integration</li>
              <li>High switching costs (long-term value)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>



    <section className="ai-process-section">
      <div className="ai-process-container">

        {/* HEADER */}
        <div className="ai-process-header fade-up">
          <h2>How Our Services Work</h2>
          <p>Our 4-Step Enterprise AI Delivery Model</p>
        </div>

        {/* PROCESS STEPS */}
        <div className="ai-steps-grid">

          <div className="ai-step-card fade-up delay-1">
            <span>01</span>
            <h4>AI Operations Audit</h4>
            <p>
              Identify workflows where AI can replace manual effort
              and reduce operational cost.
            </p>
          </div>

          <div className="ai-step-card fade-up delay-2">
            <span>02</span>
            <h4>Agent Design & Architecture</h4>
            <p>
              Secure, scalable AI agents aligned with your
              business logic and systems.
            </p>
          </div>

          <div className="ai-step-card fade-up delay-3">
            <span>03</span>
            <h4>Deployment & Integration</h4>
            <p>
              Agents deployed into ERP, CRM, finance tools,
              and internal systems.
            </p>
          </div>

          <div className="ai-step-card fade-up delay-4">
            <span>04</span>
            <h4>Monitoring & Scaling</h4>
            <p>
              Track performance, measure ROI, and expand
              automation across teams.
            </p>
          </div>

        </div>

        {/* INFO GRID */}
        <div className="ai-info-grid">

          <div className="ai-info-block fade-left">
            <h3>Enterprise-Grade Delivery Standards</h3>
            <ul>
              <li>Secure cloud infrastructure</li>
              <li>Client-level data isolation</li>
              <li>Role-based access controls</li>
              <li>Full audit logs & monitoring</li>
              <li>NDA-ready, compliance-focused design</li>
            </ul>
          </div>

          <div className="ai-info-block fade-right">
            <h3>Engagement Model</h3>
            <ul>
              <li>AI Operations Audit (entry point)</li>
              <li>Custom AI agent deployment</li>
              <li>Ongoing optimization & scaling</li>
            </ul>

            <h4>Contract Structure</h4>
            <ul>
              <li>Setup fee</li>
              <li>Monthly or annual engagement</li>
              <li>Annual contracts preferred</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="ai-cta fade-up">
          <p>Replace Manual Work With Autonomous AI Agents</p>
          <div className="ai-cta-buttons">

            <Link to="/contact-us" className="btn-primary">
              Book a Free AI Operations Audit
            </Link>

            <Link to="/services" className="btn-secondary">
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

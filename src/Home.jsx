import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (<>

    <section className="home-hero">
      <video className="hero-video" autoPlay muted playsInline>
        <source src="https://res.cloudinary.com/dtzsyzgam/video/upload/v1768907151/vd1_uhf2pi.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-inner ">
          <h1 className="hero-title">
            We Build Enterprise AI
            <br />
            Agents That Replace
            <br />
            Operations Teams
          </h1>




          <p className="hero-subtext">
            Olynto designs secure, enterprise-grade AI agents that autonomously execute
            complex business workflows, cut operational costs by up to <span>50%</span>,
            and run continuously across mission-critical systems — without downtime.
          </p>



          <div className="hero-buttons">
            <Link to="/contact-us" className="btn primary">
              Book a Free AI Operations Audit
            </Link>

            <Link to="/services" className="btn secondary">
              Talk to an AI Architect
            </Link>
          </div>
        </div>
      </div>

    </section>

    {/* ================= WHAT WE DO + HOW IT WORKS ================= */}
    <section className="enterprise-split">
      <div className="enterprise-grid">

        {/* LEFT */}
        <div className="enterprise-card reveal-left">
          <h2>What We Do</h2>
          <p className="section-subtitle1">Enterprise AI Agents</p>

          <p className="lead">
            We build <strong>AI agents that do real work</strong> —
            automating operations, finance, and internal workflows
            directly inside your existing systems.
          </p>

          <div className="service-block">
            <h4>Operations AI</h4>
            <p>Automates daily workflows, coordination, and reporting.</p>
            <span>Result: Faster execution, lower costs</span>
          </div>

          <div className="service-block">
            <h4>Finance AI</h4>
            <p>Handles accounting, forecasting, and compliance tasks.</p>
            <span>Result: Real-time financial visibility</span>
          </div>

          <div className="service-block highlight">
            <h4>Custom Enterprise Automation</h4>
            <p>
              AI agents built for your internal systems and
              cross-team workflows.
            </p>
            <span>Result: Scalable, hands-free operations</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="enterprise-card dark reveal-right">
          <h2>How It Works</h2>
          <p className="section-subtitle">
            A Simple 4-Step Deployment
          </p>

          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h5>Audit</h5>
                <p>We identify work that AI can fully automate.</p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h5>Design</h5>
                <p>We architect secure, enterprise-ready AI agents.</p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <h5>Deploy</h5>
                <p>Agents integrate with ERP, CRM, and core tools.</p>
              </div>
            </li>

            <li>
              <span>04</span>
              <div>
                <h5>Scale</h5>
                <p>We monitor performance and expand usage.</p>
              </div>
            </li>
          </ol>
        </div>

      </div>
    </section>


    {/* ================= BUSINESS IMPACT (NEW SECTION) ================= */}
    <section className="business-impact-section">
      <div className="impact-container">

        <h2>Business Impact</h2>
        <p className="section-subtitle">What Our Clients Achieve</p>

        <div className="impact-grid1">

          <div className="impact-card">
            <span className="impact-icon">🤖</span>
            <h4>24/7 Autonomous Execution</h4>
            <p>
              AI agents operate continuously without downtime,
              delays, or human dependency.
            </p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">⏱</span>
            <h4>Thousands of Hours Saved Annually</h4>
            <p>
              Manual coordination, reporting, and reviews
              are fully automated.
            </p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">📉</span>
            <h4>30–50% Reduction in Operational Costs</h4>
            <p>
              Replace repetitive human workflows
              with scalable AI automation.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* ================= WHO WE SERVE ================= */}
    <section className="who-serve">
      <div className="who-grid">

        <div className="who-card reveal-up">
          <h2>Who We Serve</h2>
          <p className="section-subtitle">Built for Operations-Heavy Organizations</p>

          <ul>
            <li>$10M – $500M annual revenue companies</li>
            <li>Process-driven enterprises</li>
            <li>Admin & finance-intensive teams</li>
            <li>Organizations replacing manual workflows</li>
          </ul>

          <p className="note">
            If your operations rely on emails, spreadsheets,
            and approvals — AI can replace it.
          </p>
        </div>

        <div className="who-card reveal-up delay">
          <h2>Industries We Work With</h2>

          <ul className="industry-list">
            <li>Financial Services & Accounting</li>
            <li>Real Estate & Property Management</li>
            <li>E-commerce & Retail Operations</li>
            <li>SaaS & Technology Companies</li>
            <li>Professional Services Firms</li>
          </ul>
        </div>

      </div>
    </section>


    <section className="why-olynto">
      <div className="why-grid">

        {/* LEFT COLUMN */}
        <div className="why-col left">
          <p className="why-eyebrow">
            Built for Security, Scale & Compliance
          </p>

          <ul className="why-list">
            <li>Secure cloud-based infrastructure</li>
            <li>Client-level data isolation</li>
            <li>Role-based access control</li>
            <li>Full audit logs & continuous monitoring</li>
            <li>NDA-ready & compliance-focused architecture</li>
          </ul>

          <p className="why-note">
            Designed to meet enterprise expectations from day one.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="why-col right">
          <h2 className="why-title">Why Olynto Technologies</h2>

          <p className="why-subtitle">
            Why leading companies choose Olynto Technologies
          </p>

          <ul className="why-points">
            <li>We focus on outcomes, not experiments</li>
            <li>We replace workflows, not “assist” humans</li>
            <li>We design AI for real business environments</li>
            <li>We think like operators, not consultants</li>
          </ul>


        </div>
        {/* GOAL STATEMENT – FULL WIDTH */}
        <div className="goal-row">
          <span className="goal-title">
            Our Goal Is Simple
          </span>

          <p className="goal-desc">
            Build AI-first enterprises powered by autonomous systems.
          </p>
        </div>

      </div>
    </section>

    {/* ================= OUR WORK – ENTERPRISE WORKFLOWS ================= */}
    <section className="workflow-showcase our-work-bg">
      <div className="workflow-container">

        <div className="workflow-header">
          <h2>Our Work in Action</h2>
          <p>
            Real-world AI workflows deployed across enterprise systems,
            automation pipelines, dashboards, and conversational interfaces.
          </p>
        </div>

        <div className="workflow-grid">

          <div className="workflow-card">
            <img src="/img/erp-workflow.png" alt="ERP Workflow Automation" />
            <div className="workflow-overlay">
              <h4>ERP Workflow Automation</h4>
              <span>Requirements → Design → Build → Deploy</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/ai-automation.png" alt="AI Automation Workflow" />
            <div className="workflow-overlay">
              <h4>AI Automation Pipelines</h4>
              <span>Tasks, approvals, integrations, dashboards</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/analytics-dashboard.png" alt="Operational Dashboard" />
            <div className="workflow-overlay">
              <h4>Operational Intelligence</h4>
              <span>KPIs, insights, secure performance tracking</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/chatbot-flow.png" alt="AI Chatbot Workflow" />
            <div className="workflow-overlay">
              <h4>AI Conversational Workflows</h4>
              <span>User intent → decision → execution</span>
            </div>
          </div>

        </div>

      </div>
    </section>



  </>



  );
};

export default Home;

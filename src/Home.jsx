import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (<>

    <section className="home-hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/video/back.mp4" type="video/mp4" />
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
          <p className="section-subtitle1">Enterprise AI Agent Solutions</p>

          <p className="lead">
            We don’t build tools.<br />
            We build <strong>autonomous AI agents</strong> that execute work,
            make decisions, and integrate directly into your systems.
          </p>

          <div className="service-block">
            <h4>AI Operations Agents (AI COO)</h4>
            <p>
              Automate workflows, coordination, reporting, and exception handling.
            </p>
            <span>Outcome: Faster execution, fewer errors, lower costs</span>
          </div>

          <div className="service-block">
            <h4>AI Finance & Accounting Agents (AI CFO)</h4>
            <p>
              Automate AP/AR, forecasting, reconciliations, and compliance.
            </p>
            <span>Outcome: Better cash visibility & financial control</span>
          </div>

          <div className="service-block highlight">
            <h4> Custom Enterprise AI Automation</h4>
            <p>
              Design and deploy AI agents for complex, cross-department workflows
              tailored to your organization.
            </p>
            <span>Outcome: Fully automated back-office operations</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="enterprise-card dark reveal-right">
          <h2>How It Works</h2>
          <p className="section-subtitle">Our Proven 4-Step AI Deployment Framework</p>

          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h5>AI Operations Audit</h5>
                <p>Identify workflows where AI replaces human effort.</p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h5>Agent Design & Architecture</h5>
                <p>Secure, scalable agents aligned with your systems.</p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <h5>Enterprise Deployment</h5>
                <p>Agents integrate into ERP, CRM, finance tools.</p>
              </div>
            </li>

            <li>
              <span>04</span>
              <div>
                <h5>Monitoring, ROI & Scaling</h5>
                <p>Optimize performance and scale across teams.</p>
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
            Real-world AI workflows deployed across ERP systems,
            automation pipelines, dashboards, and conversational interfaces.
          </p>
        </div>

        <div className="workflow-grid">

          <div className="workflow-card">
            <img src="/img/erp-workflow.png" alt="ERP Workflow Automation" />
            <div className="workflow-overlay">
              <h4>ERP Workflow Automation</h4>
              <span>Requirements → Design → Development → Testing</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/ai-automation.png" alt="AI Automation Workflow" />
            <div className="workflow-overlay">
              <h4>AI Automation Workflow</h4>
              <span>Tasks, approvals, integrations, dashboards</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/analytics-dashboard.png" alt="Operational Dashboard" />
            <div className="workflow-overlay">
              <h4>Operational Intelligence Dashboards</h4>
              <span>Secure analytics, KPIs, performance tracking</span>
            </div>
          </div>

          <div className="workflow-card">
            <img src="/img/chatbot-flow.png" alt="AI Chatbot Workflow" />
            <div className="workflow-overlay">
              <h4>AI Chatbot Workflows</h4>
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

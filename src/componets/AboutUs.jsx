import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>

      <section className="about-section">
        <div className="about-container">

          {/* INTRO */}
          <div className="about-hero fade-up">
            <h1>Building the Autonomous Enterprise</h1>
            <p>
              Olynto Technologies is an enterprise AI company focused on one
              mission: <strong>replacing manual, repetitive, and error-prone
                business operations with autonomous AI agents.</strong>
            </p>
            <p>
              We help mid-market and enterprise organizations transition from
              human-dependent workflows to <strong>AI-driven operations</strong>
              that are faster, more reliable, and significantly more
              cost-efficient.
            </p>
          </div>

          {/* PROBLEM SECTION */}
          <div className="about-problem-grid">

            <div className="about-problem-content fade-left">
              <h2>The Problem We Solve</h2>

              <p className="about-muted">
                Modern businesses still rely on:
              </p>

              <ul>
                <li>Large operations teams</li>
                <li>Manual approvals and follow-ups</li>
                <li>Spreadsheet-driven reporting</li>
                <li>Human-dependent decision making</li>
              </ul>

              <p className="about-highlight">
                These systems are slow, expensive, and difficult to scale.
              </p>

              <p className="about-note">
                As companies grow, operational complexity increases —
                but hiring more people only increases cost and risk.
                <br />
                <strong>AI agents change that.</strong>
              </p>
            </div>

            {/* VISUAL CARD */}
            <div className="about-problem-visual fade-right">
              <div className="visual-card">
                <h4>Traditional Operations</h4>
                <ul>
                  <li>Manual workflows</li>
                  <li>Approval bottlenecks</li>
                  <li>Human error</li>
                  <li>High operational cost</li>
                </ul>

                <div className="divider"></div>

                <h4>Autonomous Operations</h4>
                <ul>
                  <li>AI-driven workflows</li>
                  <li>24/7 execution</li>
                  <li>Consistent decisions</li>
                  <li>Lower cost at scale</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="approach-section">
        <div className="approach-container">

          {/* LEFT – OUR APPROACH */}
          <div className="approach-left fade-left">
            <h2>Our Approach</h2>

            <p className="approach-intro">
              At Olynto Technologies, we don’t build generic AI tools.
              We design <strong>autonomous AI agents</strong> that execute
              real work inside enterprise environments.
            </p>

            <h4>Our agents:</h4>
            <ul className="approach-list">
              <li>Follow business rules and policies</li>
              <li>Integrate directly with existing systems</li>
              <li>Make decisions, trigger actions, and escalate exceptions</li>
              <li>Operate securely and continuously</li>
            </ul>

            <p className="approach-note">
              This allows organizations to run <strong>leaner operations</strong>
              without sacrificing control or visibility.
            </p>
          </div>

          {/* RIGHT – DIFFERENTIATORS */}
          <div className="approach-right fade-right">
            <h2>What Makes Olynto Different</h2>

            <div className="diff-grid">
              <div className="diff-card">
                <h4>Outcome-Driven, Not Experimental</h4>
                <p>
                  We focus on measurable business impact —
                  cost reduction, efficiency gains, and operational clarity.
                </p>
              </div>

              <div className="diff-card">
                <h4>Built for Real Enterprises</h4>
                <p>
                  Designed for complex workflows, large teams,
                  and strict security requirements.
                </p>
              </div>

              <div className="diff-card">
                <h4>Human Replacement, Not Assistance</h4>
                <p>
                  Our AI agents replace repetitive human work,
                  not merely “support” it.
                </p>
              </div>

              <div className="diff-card">
                <h4>Long-Term Architecture</h4>
                <p>
                  Everything we build scales from service deployment
                  to full product platform.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="foundation-section">
        <div className="foundation-container">

          {/* LEFT CARD */}
          <div className="foundation-card dark left fade-left">
            <h3>Enterprise-Grade Foundation</h3>

            <p className="card-intro">
              From day one, Olynto Technologies operates with
              enterprise standards in mind.
            </p>

            <ul>
              <li>Secure, cloud-native infrastructure</li>
              <li>Client-level data isolation</li>
              <li>Role-based access controls</li>
              <li>Full audit logs and monitoring</li>
              <li>NDA-ready, compliance-focused delivery</li>
            </ul>

            <p className="card-note">
              Security and reliability are core to our architecture.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="foundation-card light right fade-right">
            <h3>Our Vision</h3>

            <p className="card-intro">
              We believe the future of business is <strong>AI-first</strong>.
            </p>

            <ul>
              <li>Operations run by autonomous agents</li>
              <li>Finance workflows continuously optimized</li>
              <li>Back-office functions without manual work</li>
            </ul>

            <p className="card-note">
              We are building this future — one autonomous system at a time.
            </p>
          </div>

        </div>
      </section>


      <section className="who-section">
        <div className="who-container">

         

          {/* RIGHT CTA */}
          <div className="who-cta fade-right">
            <h3>Ready to Build an AI-First Organization?</h3>
            <p>
              If you’re exploring how autonomous AI agents can transform your
              operations, we’d love to talk.
            </p>

            <div className="cta-buttons">
              

              <Link to="/contact-us" className="cta-primary">
                Schedule a Strategy Call
              </Link>
            </div>


          </div>

        </div>
      </section >
    </>
  );
}

export default AboutUs;

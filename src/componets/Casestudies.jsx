import React, { useEffect, useRef, useState } from "react";
import "./Casestudy.css";





function Casestudies() {


  /* ===============================
   RESULTS COUNTER LOGIC
================================ */
  const resultsRef = useRef(null);
  const [startResults, setStartResults] = useState(false);

  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState("0");
  const [v4, setV4] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartResults(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (resultsRef.current) observer.observe(resultsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startResults) return;

    steppedCounter(setV1, 30, 2200);
    steppedCounter(setV2, 100, 2600);

    // Static values with delay
    setTimeout(() => setV3("24/7"), 1400);
    setTimeout(() => setV4("↑"), 1700);
  }, [startResults]);

  function steppedCounter(setter, end, duration) {
    let start = 0;
    const steps = 40;
    const increment = Math.max(1, Math.floor(end / steps));
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(start);
      }
    }, interval);
  }

  /* ===============================
      FINANCE COUNTER STATE
   =============================== */
  const [count, setCount] = useState(0);

  /* ===============================
     AI OPS COUNTER STATES
  =============================== */
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [countCost, setCountCost] = useState(0);
  const [countHours, setCountHours] = useState(0);
  const [countSpeed, setCountSpeed] = useState(0);
  const [countVisibility, setCountVisibility] = useState(0);
  const [started, setStarted] = useState(false);


  /* ===============================
     INTERSECTION OBSERVER (AI OPS)
  =============================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // wait for paint, then start animation
          requestAnimationFrame(() => {
            setStarted(true);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  /* ===============================
     AI OPS COUNT-UP LOGIC
  =============================== */
  useEffect(() => {
    if (!started) return;

    animateCounter(setCountCost, 38, 3200);
    animateCounter(setCountHours, 1200, 3600);
    animateCounter(setCountSpeed, 45, 3000);
    animateCounter(setCountVisibility, 100, 3400);
  }, [started]);

  /* ===============================
     FINANCE COUNT-UP LOGIC
  =============================== */
  useEffect(() => {
    if (!started) return;

    animateCounter(setCount, 42, 3000);
  }, [started]);


  /* ===============================
     HELPER FUNCTION
  =============================== */
  function animateCounter(setter, end, duration = 3000) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // premium ease-out (very slow near end)
      const eased = 1 - Math.pow(1 - progress, 4);

      const value = Math.floor(eased * end);
      setter(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
  /* ===============================
     SUB COMPONENTS
  =============================== */
  function FlowBlock({ title, items }) {
    return (
      <div className="flow-step">
        <h4>{title}</h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  function ImpactCard({ label, value, suffix }) {
    return (
      <div className="impact-item">
        <strong>{value}{suffix}</strong>
        <span>{label}</span>
      </div>
    );
  }

  document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".result-card strong");
    const section = document.querySelector(".cs-results");

    let hasAnimated = false;

    const animateCounter = (el) => {
      const target = el.dataset.value;
      const suffix = el.dataset.suffix || "";
      const symbol = el.dataset.symbol || "";

      // Special cases (24/7, ↑)
      if (target.includes("/") || symbol) {
        setTimeout(() => {
          el.textContent = symbol ? symbol : target;
        }, 800);
        return;
      }

      const end = parseInt(target, 10);
      let current = 0;

      const duration = 1800; // slower = more premium feel
      const steps = 40;
      const increment = Math.max(1, Math.floor(end / steps));
      const interval = duration / steps;

      const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
          current = end;
          clearInterval(timer);
        }

        el.textContent = current + suffix;
      }, interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            counters.forEach(counter => animateCounter(counter));
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);
  });


  return (
    <>
      <section className="case-hero case-video">
        <video className="case-bg-video" autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dtzsyzgam/video/upload/v1768907152/vd3_i5dv2m.mp4"
            type="video/mp4"
          />
        </video>

        <div className="case-overlay"></div>

        {/* CONTENT OFFSET */}
        <div className="case-container case-content-offset">
          <div className="case-card">
            <h2 className="case-title">
              Real <span className="ai-highlight">AI Deployments</span> Measurable
              Business Impact
            </h2>

            <p className="case-subtitle">
              Delivering AI-Automation, Cybersecurity & Modern Web Solutions
            </p>

            <p className="case-desc">
              At <span className="ai-highlight1">Olynto Technologies</span>, we deploy{" "}
              <strong>autonomous Real AI agents</strong> into real enterprise
              environments.
            </p>

            <p className="case-note">
              All case studies are anonymous and outcome-focused.
            </p>
          </div>
        </div>
      </section>


      <section className="cs-auto">
        <div className="cs-container">

          {/* HEADER */}
          <div className="cs-header fade-up">
            <h3>CUSTOM ENTERPRISE AI AUTOMATION</h3>
            <div className="cs-header-line"></div>

            <div className="cs-meta">
              <span><strong>Industry:</strong> Professional Services</span>
              <span><strong>Company Size:</strong> 120+ employees</span>
              <span><strong>Region:</strong> US-based</span>
            </div>
          </div>

          {/* GRID */}
          <div className="cs-grid">

            {/* LEFT CONTENT */}
            <div className="cs-content fade-left">

              <div className="cs-block">
                <h4>Problem</h4>
                <ul className="stagger-list">
                  <li className="stagger-item">
                    Heavy reliance on operations coordinators
                  </li>
                  <li className="stagger-item">
                    Manual task tracking across multiple teams
                  </li>
                  <li className="stagger-item">
                    Delayed reporting and approval cycles
                  </li>
                  <li className="stagger-item">
                    Rising operational overhead and execution risk
                  </li>
                </ul>
              </div>

              <div className="cs-block">
                <h4>AI Solutions Deployed</h4>
                <ul className="stagger-list">
                  <li className="stagger-item">
                    Autonomous AI Operations Agents
                  </li>
                  <li className="stagger-item">
                    Automated task routing and priority assignment
                  </li>
                  <li className="stagger-item">
                    Real-time operational dashboards
                  </li>
                  <li className="stagger-item">
                    Exception detection and escalation logic
                  </li>
                </ul>
              </div>

            </div>

            {/* RIGHT SIDE (UNCHANGED) */}
            <div className="fade-right cs-visual-placeholder">
              <div className="cs-visual-hint">
                <span>Enterprise AI Operations</span>
                <p>Designed for speed, resilience, and scale</p>
              </div>
            </div>

          </div>


          {/* RESULTS */}
          <div className="cs-results" ref={resultsRef}>
            <div className="cs-result-grid">

              <div className="result-card">
                <strong>{v1}%</strong>
                <span>Faster financial operations</span>
              </div>

              <div className="result-card">
                <strong>{v2}%</strong>
                <span>Audit logs & traceability</span>
              </div>

              <div className="result-card">
                <strong>24/7</strong>
                <span>Autonomous execution</span>
              </div>

              <div className="result-card">
                <strong>{v4}</strong>
                <span>Improved compliance control</span>
              </div>

            </div>
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
            <div className="img-wrap">
              <img src="/img/img5.jpg" alt="AI CFO Dashboard" />
            </div>
            <div className="img-wrap">
              <img src="/img/img6.jpg" alt="Finance Automation View" />
            </div>
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

              <div className="bar">
                <label>Finance workload reduction</label>
                <span>42%</span>
                <div className="progress">
                  <div className="progress-fill" style={{ width: `${count}%` }} />
                </div>
              </div>

              <div className="bar">
                <label>Cash-flow visibility</label>
                <span>Near real-time</span>
                <div className="progress">
                  <div className="progress-fill w90" />
                </div>
              </div>

              <div className="bar">
                <label>Financial errors</label>
                <span>Reduced</span>
                <div className="progress">
                  <div className="progress-fill w80" />
                </div>
              </div>

              <div className="bar">
                <label>Monthly closes</label>
                <span>Faster cycles</span>
                <div className="progress">
                  <div className="progress-fill w70" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* ================= AI COO ================= */}
      <section className="ai-ops-case" ref={sectionRef}>
        <div className="ai-ops-container">

          <div className="ai-ops-header reveal">
            <h3>AI OPERATIONS AGENTS (AI COO)</h3>
          </div>

          <div className="ai-ops-layout">
            <div className="ai-ops-flow">
              <FlowBlock
                title="Operational Challenges"
                items={[
                  "Manual coordination",
                  "Delayed approvals",
                  "High operational costs"
                ]}
              />
              <FlowBlock
                title="AI Solutions"
                items={[
                  "Autonomous AI agents",
                  "Real-time dashboards",
                  "Exception handling"
                ]}
              />
            </div>

            <div className="ai-ops-visual reveal">
              <img src="/img/img3.jpg" alt="AI Ops" />
              <img src="/img/img4.jpg" alt="AI Ops View" />
            </div>
          </div>

          <div className="ai-ops-impact reveal">
            <h4>Results</h4>
            <div className="impact-grid">
              <ImpactCard label="Cost reduction" value={countCost} suffix="%" />
              <ImpactCard label="Hours saved" value={countHours} suffix="+" />
              <ImpactCard label="Speed improvement" value={countSpeed} suffix="%" />
              <ImpactCard label="Visibility" value={countVisibility} suffix="%" />
            </div>
          </div>

        </div>
      </section>

    </>
  );
}


export default Casestudies;


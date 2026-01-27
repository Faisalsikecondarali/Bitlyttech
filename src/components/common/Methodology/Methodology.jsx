import React from 'react';
import './Methodology.css';

const Methodology = ({ setCurrentPage }) => {
  const methodologySteps = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M24 14v8m0 4v2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: ["Requirements Analysis", "Market Research", "Technical Planning", "Resource Allocation"]
    },
    {
      id: 2,
      number: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product before development.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="12" width="24" height="24" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M18 18h12M18 22h8M18 26h12" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: ["UI/UX Design", "Wireframing", "Prototyping", "User Testing"]
    },
    {
      id: 3,
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing to ensure quality and performance.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 20l4 4 12-12" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      features: ["Agile Development", "Code Reviews", "Automated Testing", "Performance Optimization"]
    },
    {
      id: 4,
      number: "04",
      title: "Deployment & Support",
      description: "We handle the complete deployment process and provide ongoing support to ensure smooth operation.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8v16m0 8v4M16 16l8-8 8 8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      features: ["Cloud Deployment", "Monitoring Setup", "Documentation", "24/7 Support"]
    }
  ];

  return (
    <section className="methodology">
      <div className="methodology-container">
        <div className="methodology-header">
          <h2 className="methodology-title">Our Work Methodology</h2>
          <p className="methodology-subtitle">
            We follow a structured approach to ensure successful project delivery with transparency and excellence at every stage.
          </p>
        </div>

        <div className="methodology-timeline">
          <div className="timeline-line"></div>
          {methodologySteps.map((step, index) => (
            <div className="methodology-card" key={step.id}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-features">
                {step.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5 8l2 2 4-4" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8" cy="8" r="7.5" stroke="#00D4FF" strokeWidth="1"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="step-connector"></div>
            </div>
          ))}
        </div>

        <div className="methodology-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's work together to bring your vision to life using our proven methodology</p>
            <button
              className="cta-button"
              type="button"
              onClick={() => {
                if (typeof setCurrentPage === 'function') {
                  setCurrentPage('contact')
                } else {
                  window.history.pushState(null, '', '/contact')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                }
              }}
            >
              Start Your Journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

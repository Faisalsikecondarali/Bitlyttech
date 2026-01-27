import React from 'react';
import { FaCloud, FaCogs, FaCube, FaLock, FaMicrochip, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import './ITConsulting.css';

const ITConsulting = ({ setCurrentPage, currentPage }) => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Digital Transformation",
      description: "Guiding businesses through modern technology adoption and digital evolution."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Security Consulting",
      description: "Comprehensive security assessments and implementation strategies."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cloud Strategy",
      description: "Cloud migration planning and optimization for maximum efficiency."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Process Optimization",
      description: "Streamlining business processes through technology solutions."
    }
  ];

  const technologies = [
    { name: "Cloud Computing", icon: <FaCloud size={18} /> },
    { name: "DevOps", icon: <FaCogs size={18} /> },
    { name: "Agile", icon: <FaProjectDiagram size={18} /> },
    { name: "Scrum", icon: <FaProjectDiagram size={18} /> },
    { name: "ITIL", icon: <FaCogs size={18} /> },
    { name: "Cybersecurity", icon: <FaLock size={18} /> },
    { name: "Data Analytics", icon: <FaProjectDiagram size={18} /> },
    { name: "AI/ML", icon: <FaRobot size={18} /> },
    { name: "Blockchain", icon: <FaCube size={18} /> },
    { name: "IoT", icon: <FaMicrochip size={18} /> }
  ];

  const handleStartProject = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in starting an IT consulting project. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewPortfolio = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="it-consulting-page">
      
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">IT Consulting</h1>
            <p className="service-hero-subtitle">
              Strategic technology consulting to help businesses leverage technology for growth and competitive advantage in the digital age.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleStartProject}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary" onClick={handleViewPortfolio}>
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      <section className="service-features">
        <div className="service-container">
          <h2 className="section-title">Our Consulting Expertise</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-technologies">
        <div className="service-container">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div className="tech-item" key={index}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="service-container">
          <h2 className="section-title">Our Consulting Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Analysis</h3>
                <p>Understanding your business needs and conducting comprehensive analysis.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategy & Planning</h3>
                <p>Developing tailored technology strategies and implementation roadmap.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation & Training</h3>
                <p>Deploying solutions and training your team for optimal adoption.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Support & Optimization</h3>
                <p>Ongoing support and continuous optimization of technology solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's create something amazing together. Contact us today for a free consultation.</p>
            <button className="cta-primary">
              Get Started Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;

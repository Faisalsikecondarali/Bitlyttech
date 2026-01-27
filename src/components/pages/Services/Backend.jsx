import React from 'react';
import { FaAws, FaCloud, FaDocker, FaJava, FaNodeJs, FaPython, FaServer } from 'react-icons/fa';
import { SiGraphql, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiRedis } from 'react-icons/si';
import './Backend.css';

const Backend = ({ setCurrentPage, currentPage }) => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M4 6h16M4 9h12M4 12h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless data integration."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Database Design",
      description: "Scalable database architecture for optimal performance."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cloud Integration",
      description: "AWS, Azure, and Google Cloud deployment solutions."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Microservices",
      description: "Scalable microservices architecture for modern applications."
    }
  ];

  const technologies = [
    { name: "Node.js", icon: <FaNodeJs size={18} /> },
    { name: "Python", icon: <FaPython size={18} /> },
    { name: "Java", icon: <FaJava size={18} /> },
    { name: "MongoDB", icon: <SiMongodb size={18} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
    { name: "MySQL", icon: <SiMysql size={18} /> },
    { name: "Redis", icon: <SiRedis size={18} /> },
    { name: "Docker", icon: <FaDocker size={18} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={18} /> },
    { name: "AWS", icon: <FaAws size={18} /> },
    { name: "Azure", icon: <FaCloud size={18} /> },
    { name: "GraphQL", icon: <SiGraphql size={18} /> },
    { name: "REST API", icon: <FaServer size={18} /> }
  ];

  const portfolio = [
    {
      title: "E-Commerce API",
      description: "Complete RESTful API for online shopping platform",
      image: "/images/backend.jpg"
    },
    {
      title: "Hr dashboard Api",
      description: "Secure financial services backend with microservices",
      image: "/images/hr.webp"
    },
    {
      title: "Analytics Platform",
      description: "Real-time data processing and analytics backend system",
      image: "/images/Sas.webp"
    }
  ];

  const handleStartProject = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in starting a backend development project. Please share more details.";
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
    <div className="backend-page">
      
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Backend Development</h1>
            <p className="service-hero-subtitle">
              Building robust, scalable, and secure backend systems that power modern applications with enterprise-grade architecture.
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
          <h2 className="section-title">Our Backend Expertise</h2>
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
          <h2 className="section-title">Our Development Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>Understanding your requirements and creating a detailed project roadmap.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Architecture & Design</h3>
                <p>Designing scalable architecture and database schemas.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Development & Testing</h3>
                <p>Building the application with clean code and comprehensive testing.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Deployment & Support</h3>
                <p>Launching your application and providing ongoing maintenance and support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-portfolio">
        <div className="service-container">
          <h2 className="section-title">Recent Backend Projects</h2>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <button className="portfolio-btn" type="button">
                      View Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container">
          <div className="cta-content">
            <h2>Ready to Build Your Backend Infrastructure?</h2>
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

export default Backend;

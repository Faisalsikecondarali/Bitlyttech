import React from 'react';
import {
  SiAdobe,
  SiCanva,
  SiFigma,
  SiFramer,
  SiInvision,
  SiMarvelapp,
  SiSketch
} from 'react-icons/si';
import './UIDesign.css';

const UIDesign = ({ setCurrentPage, currentPage }) => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "User-Centered Design",
      description: "Creating intuitive interfaces that prioritize user experience and accessibility."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Modern Prototyping",
      description: "Interactive prototypes and wireframes for testing and validation."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Brand Consistency",
      description: "Maintaining consistent brand identity across all digital touchpoints."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Design Systems",
      description: "Scalable design systems and component libraries for consistency."
    }
  ];

  const technologies = [
    { name: "Figma", icon: <SiFigma size={18} /> },
    { name: "Sketch", icon: <SiSketch size={18} /> },
    { name: "Adobe XD", icon: <SiAdobe size={18} /> },
    { name: "InVision", icon: <SiInvision size={18} /> },
    { name: "Framer", icon: <SiFramer size={18} /> },
    { name: "Principle", icon: <SiAdobe size={18} /> },
    { name: "Zeplin", icon: <SiAdobe size={18} /> },
    { name: "Marvel", icon: <SiMarvelapp size={18} /> },
    { name: "Canva", icon: <SiCanva size={18} /> },
    { name: "Photoshop", icon: <SiAdobe size={18} /> }
  ];

  const portfolio = [
    {
      title: "Fitness App UI",
      description: "Complete mobile banking interface with modern design principles",
      image: "/images/fitness.webp"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard with data visualization and analytics",
      image: "/images/ecommercemobile.webp"
    },
    {
      title: "Social Media Platform",
      description: "Social networking app with engaging user interface",
      image: "/images/socail.webp"
    }
  ];

  const handleStartProject = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in starting a UI/UX design project. Please share more details.";
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
    <div className="ui-design-page">
      
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">UI/UX Design</h1>
            <p className="service-hero-subtitle">
              Crafting beautiful, intuitive, and user-centered designs that delight users and drive engagement across all platforms.
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
          <h2 className="section-title">Our Design Expertise</h2>
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

      <section className="service-process">
        <div className="service-container">
          <h2 className="section-title">Our Design Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Research</h3>
                <p>Understanding user needs and conducting comprehensive research.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Creating wireframes, mockups, and interactive prototypes for your approval.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Testing & Iteration</h3>
                <p>User testing and refining designs based on feedback.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Delivery & Support</h3>
                <p>Handing off designs and providing ongoing design support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-portfolio">
        <div className="service-container">
          <h2 className="section-title">Recent Design Projects</h2>
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

      <section className="service-technologies">
        <div className="service-container">
          <h2 className="section-title">Design Tools & Technologies</h2>
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

      <section className="service-cta">
        <div className="service-container">
          <div className="cta-content">
            <h2>Ready to Transform Your User Experience?</h2>
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

export default UIDesign;

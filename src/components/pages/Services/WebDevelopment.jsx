import React, { useEffect } from 'react';
import { FaServer } from 'react-icons/fa';
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMongodb
} from 'react-icons/si';
import './WebDevelopment.css';

const WebDevelopment = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    // Update meta tags for Web Development service page
    document.title = 'Web Development Services | Custom Website Development | Bitlyt Tech Solutions';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Professional web development services including custom website development, responsive web design, e-commerce solutions, and web application development. Expert team using React, Vue, Angular, Node.js for high-performance websites. Get a free consultation today.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'web development, custom website development, responsive web design, e-commerce website, web application development, React development, Vue.js development, Angular development, Next.js development, Node.js development, TypeScript development, full-stack development, frontend development, backend development, website design, corporate website, business website, SEO-friendly website, fast website development');

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Web Development Services | Custom Website Development');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Professional web development services including custom website development, responsive web design, e-commerce solutions, and web application development.');

    // Add Service Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Professional web development services including custom website development, responsive web design, e-commerce solutions, and web application development.",
      "provider": {
        "@type": "Organization",
        "name": "Bitlyt Tech Solutions",
        "url": "https://www.bitlyttech.org"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website Development",
              "description": "Tailor-made websites designed to meet your specific business needs and goals."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Development",
              "description": "Full-featured online stores with payment gateway integration and inventory management."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Development",
              "description": "Complex web applications with advanced functionality and database integration."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Web Design",
              "description": "Mobile-first design that ensures your website looks great on all devices."
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Responsive Design",
      description: "We create websites that look stunning on all devices - from desktop to mobile."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized code and modern techniques ensure lightning-fast loading times."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Modern Technologies",
      description: "Using React, Vue, Angular, and cutting-edge frameworks for robust applications."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secure & Scalable",
      description: "Built with security best practices and scalable architecture for growth."
    }
  ];

  const technologies = [
    { name: "React", icon: <SiReact size={18} /> },
    { name: "Vue.js", icon: <SiVuedotjs size={18} /> },
    { name: "Angular", icon: <SiAngular size={18} /> },
    { name: "Next.js", icon: <SiNextdotjs size={18} /> },
    { name: "Node.js", icon: <SiNodedotjs size={18} /> },
    { name: "TypeScript", icon: <SiTypescript size={18} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
    { name: "GraphQL", icon: <SiGraphql size={18} /> },
    { name: "REST API", icon: <FaServer size={18} /> },
    { name: "MongoDB", icon: <SiMongodb size={18} /> }
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      image: "/images/ecommerce.png"
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS",
      image: "/images/Corporate.webp"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data",
      image: "/images/Sas.webp"
    }
  ];

  const handleStartProject = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in starting a web development project. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewPortfolio = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="web-development-page">
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Web Development</h1>
            <p className="service-hero-subtitle">
              Building modern, responsive, and high-performance web applications that drive business growth and deliver exceptional user experiences.
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
          <h2 className="section-title">Our Web Development Expertise</h2>
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
                <h3>Design & Prototyping</h3>
                <p>Creating wireframes, mockups, and interactive prototypes for your approval.</p>
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
          <h2 className="section-title">Recent Web Projects</h2>
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
            <h2>Ready to Build Your Dream Website?</h2>
            <p>Let's create something amazing together. Contact us today for a free consultation.</p>
            <button className="cta-primary" onClick={handleGetStarted}>
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

export default WebDevelopment;

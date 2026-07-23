import React, { useEffect } from 'react';
import { FaAws } from 'react-icons/fa';
import {
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSwift
} from 'react-icons/si';
import './MobileApps.css';

const MobileApps = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    // Update meta tags for Mobile Apps service page
    document.title = 'Mobile App Development Services | iOS & Android Apps | Bitlyt Tech Solutions';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Professional mobile app development services for iOS and Android. Expert team using React Native, Flutter, Swift, and Kotlin for cross-platform and native mobile applications. Get a free consultation today.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile app development, iOS app development, Android app development, React Native development, Flutter development, Swift development, Kotlin development, cross-platform mobile apps, native mobile apps, mobile app design, app development company, mobile application development, custom mobile apps, enterprise mobile apps, mobile app MVP, app development services');

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Mobile App Development Services | iOS & Android Apps');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Professional mobile app development services for iOS and Android using React Native, Flutter, Swift, and Kotlin.');

    // Add Service Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development Services",
      "description": "Professional mobile app development services for iOS and Android using React Native, Flutter, Swift, and Kotlin.",
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
        "name": "Mobile App Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "iOS App Development",
              "description": "Native iOS applications built with Swift following Apple design guidelines."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Android App Development",
              "description": "Native Android applications built with Kotlin for optimal performance."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Platform Development",
              "description": "Build once, deploy everywhere with React Native and Flutter for iOS and Android."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App MVP",
              "description": "Minimum viable product development to validate your app idea quickly."
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
          <rect x="12" y="8" width="10" height="12" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M8 8V4a2 2 0 012-2H4a2 2 0 00-2v4m0 0v8a2 2 0 002 2h4a2 2 0 002-2v-4m0 0h8a2 2 0 012-2V4a2 2 0 00-2h-4a2 2 0 00-2 2v4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter for iOS and Android."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10 5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10-5 10 5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Native Performance",
      description: "Lightning-fast apps with native performance and smooth user experience."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 12l-4-4v3H6v-3l-4 4 4 4v-3h12v3z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Modern UI/UX",
      description: "Beautiful, intuitive interfaces following platform design guidelines."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secure & Scalable",
      description: "Enterprise-grade security with scalable architecture for growth."
    }
  ];

  const technologies = [
    { name: "React Native", icon: <SiReact size={18} /> },
    { name: "Flutter", icon: <SiFlutter size={18} /> },
    { name: "Swift", icon: <SiSwift size={18} /> },
    { name: "Kotlin", icon: <SiKotlin size={18} /> },
    { name: "Firebase", icon: <SiFirebase size={18} /> },
    { name: "AWS", icon: <FaAws size={18} /> },
    { name: "Node.js", icon: <SiNodedotjs size={18} /> },
    { name: "MongoDB", icon: <SiMongodb size={18} /> }
  ];

  const portfolio = [
    {
      title: "Food Delivery App",
      description: "Complete food ordering and delivery platform with real-time tracking",
      image: "/images/App.webp"
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness app with workout plans and progress tracking",
      image: "/images/fitness.webp"
    },
    {
      title: "E-Commerce Mobile",
      description: "Shopping app with payment integration and inventory management",
      image: "/images/ecommercemobile.webp"
    }
  ];

  const handleStartProject = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in starting a mobile app development project. Please share more details.";
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
    <div className="mobile-apps-page">
      
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Mobile App Development</h1>
            <p className="service-hero-subtitle">
              Creating powerful, intuitive, and engaging mobile applications that deliver exceptional user experiences across all platforms.
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
          <h2 className="section-title">Our Mobile App Expertise</h2>
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
          <h2 className="section-title">Recent Mobile Projects</h2>
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
            <h2>Ready to Build Your Dream App?</h2>
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

export default MobileApps;

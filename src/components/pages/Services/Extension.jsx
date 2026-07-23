import React, { useEffect } from 'react';
import { FaChrome, FaEdge, FaFirefox, FaSafari } from 'react-icons/fa';
import { SiNodedotjs, SiReact, SiTypescript, SiVuedotjs, SiJavascript } from 'react-icons/si';
import './Extension.css';

const Extension = () => {
  useEffect(() => {
    // Update meta tags for Browser Extensions service page
    document.title = 'Browser Extension Development | Chrome & Firefox Extensions | Bitlyt Tech Solutions';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Professional browser extension development services for Chrome, Firefox, Safari, and Edge. Expert team using JavaScript, TypeScript, React, and Vue.js for custom extensions and plugins. Get a free consultation today.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'browser extension development, Chrome extension, Firefox extension, Safari extension, Edge extension, WebExtensions, plugin development, JavaScript extension, TypeScript extension, React extension, Vue.js extension, custom browser extension, extension development company, Chrome Web Store, Firefox Add-ons');

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Browser Extension Development | Chrome & Firefox Extensions');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Professional browser extension development services for Chrome, Firefox, Safari, and Edge using JavaScript, TypeScript, React, and Vue.js.');

    // Add Service Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Browser Extension Development Services",
      "description": "Professional browser extension development services for Chrome, Firefox, Safari, and Edge using JavaScript, TypeScript, React, and Vue.js.",
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
        "name": "Browser Extension Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chrome Extension Development",
              "description": "Custom Chrome extensions for productivity, automation, and business workflows."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Firefox Extension Development",
              "description": "Firefox add-ons and extensions using WebExtensions API."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Platform Extensions",
              "description": "Extensions that work across Chrome, Firefox, Safari, and Edge browsers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plugin Development",
              "description": "Custom plugins and integrations for popular platforms and applications."
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
      title: "Browser Extensions",
      description: "Chrome, Firefox, Safari extensions for enhanced productivity."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Plugin Development",
      description: "Custom plugins for popular platforms and applications."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "API Integration",
      description: "Seamless integration with third-party APIs and services."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cross-Platform",
      description: "Extensions that work across multiple browsers and platforms."
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: <SiJavascript size={18} /> },
    { name: "TypeScript", icon: <SiTypescript size={18} /> },
    { name: "React", icon: <SiReact size={18} /> },
    { name: "Vue.js", icon: <SiVuedotjs size={18} /> },
    { name: "Chrome APIs", icon: <FaChrome size={18} /> },
    { name: "Firefox APIs", icon: <FaFirefox size={18} /> },
    { name: "Safari Extensions", icon: <FaSafari size={18} /> },
    { name: "Edge Extensions", icon: <FaEdge size={18} /> },
    { name: "WebExtensions", icon: <FaChrome size={18} /> },
    { name: "Node.js", icon: <SiNodedotjs size={18} /> }
  ];

  return (
    <div className="extension-page">
      
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Browser Extensions</h1>
            <p className="service-hero-subtitle">
              Developing powerful browser extensions and plugins that enhance user productivity and extend functionality.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="service-container">
          <h2 className="section-title">Extension Development</h2>
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
          <h2 className="section-title">Extension Technologies</h2>
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
    </div>
  );
};

export default Extension;

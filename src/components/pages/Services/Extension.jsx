import React from 'react';
import { FaChrome, FaEdge, FaFirefox, FaSafari } from 'react-icons/fa';
import { SiNodedotjs, SiReact, SiTypescript, SiVuedotjs, SiJavascript } from 'react-icons/si';
import './Extension.css';

const Extension = () => {
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

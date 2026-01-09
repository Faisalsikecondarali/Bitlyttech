import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Fast Development",
      description: "Rapid development cycles with agile methodologies and cutting-edge technologies to deliver solutions quickly."
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance processes to ensure robust and reliable applications."
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41 1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your applications running smoothly."
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Scalable Solutions",
      description: "Built to grow with your business, ensuring your technology scales as your company expands."
    },
    {
      id: 5,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Security First",
      description: "Enterprise-grade security measures to protect your data and ensure compliance with industry standards."
    },
    {
      id: 6,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: "Expert Team",
      description: "Highly skilled professionals with extensive experience in cutting-edge technologies and best practices."
    },
    {
      id: 7,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H8a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M16 7V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M10 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Affordable Packages",
      description: "Budget-friendly pricing with premium quality — flexible packages for startups, SMEs, and growing businesses."
    },
    {
      id: 8,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Clear Communication",
      description: "Regular updates and transparent progress tracking — you always know what’s happening and what’s next."
    },
    {
      id: 9,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M7 2l2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 2l-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "On-Time Delivery",
      description: "Reliable timelines with milestone-based delivery — we ship on schedule without compromising quality."
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Why Choose Bitlyt Tech</h2>
          <p className="features-subtitle">
            We combine innovation, expertise, and passion to deliver exceptional digital solutions that drive business growth.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
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
  );
};

export default Features;

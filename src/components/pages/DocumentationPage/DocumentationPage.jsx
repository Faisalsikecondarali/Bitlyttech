import React from 'react';
import './DocumentationPage.css';

const DocumentationPage = ({ setCurrentPage }) => {
  const handleContact = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('contact');
    } else {
      window.history.pushState(null, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: 'Project Process',
      text: 'Our delivery process is designed for clarity: discovery, UI/UX, development, testing, deployment, and support. We work in milestones so you can review and approve each stage before moving forward.'
    },
    {
      title: 'Deployment & Hosting',
      text: 'We can deploy to Netlify, Vercel, VPS, or cloud platforms. We configure redirects for SPA routing, optimize caching, and help you connect your domain with SSL.'
    },
    {
      title: 'SEO & Performance',
      text: 'We implement on-page SEO, clean URLs, sitemap.xml, robots.txt, Open Graph tags, and performance optimization for fast load times and better rankings.'
    },
    {
      title: 'Maintenance',
      text: 'After launch, we can handle monitoring, security updates, bug fixes, and continuous improvements. Maintenance keeps your product stable and your website competitive.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1 className="support-title">Documentation</h1>
          <p className="support-subtitle">
            A clear guide to how we build, deliver, and support modern websites and applications.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="doc-grid">
            {sections.map((s, idx) => (
              <div className="doc-card" key={idx}>
                <h2 className="doc-title">{s.title}</h2>
                <p className="doc-text">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="doc-note">
            <h2 className="doc-note-title">Need technical details for your project?</h2>
            <p className="doc-note-text">
              Share your requirements and we’ll provide architecture notes, timelines, and a clear delivery plan.
            </p>
            <button className="support-cta-btn" type="button" onClick={handleContact}>
              Contact Us
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

export default DocumentationPage;

import React from 'react';
import './CookiePolicyPage.css';

const CookiePolicyPage = () => {
  const sections = [
    {
      title: 'What Are Cookies?',
      text: 'Cookies are small text files stored on your device when you visit a website. They help improve user experience by remembering preferences and enabling basic analytics.'
    },
    {
      title: 'How We Use Cookies',
      text: 'Bitlyt Tech Solutions may use cookies to understand how visitors use our website, improve performance, and enhance usability. We do not use cookies to sell personal information.'
    },
    {
      title: 'Analytics',
      text: 'We may use analytics tools to measure traffic and performance (for example, which pages are visited). This helps us improve SEO, speed, and overall website experience.'
    },
    {
      title: 'Managing Cookies',
      text: 'You can control or delete cookies from your browser settings. Disabling cookies may affect some website features, but core pages should remain accessible.'
    },
    {
      title: 'Updates',
      text: 'We may update this Cookie Policy from time to time. Please check this page periodically for changes.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1 className="support-title">Cookie Policy</h1>
          <p className="support-subtitle">
            This page explains how cookies are used on the Bitlyt Tech Solutions website.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="policy-card">
            {sections.map((s, idx) => (
              <div className="policy-section" key={idx}>
                <h2 className="policy-title">{s.title}</h2>
                <p className="policy-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;

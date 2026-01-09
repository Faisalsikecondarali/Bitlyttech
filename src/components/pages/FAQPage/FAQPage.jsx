import React from 'react';
import './FAQPage.css';

const FAQPage = ({ setCurrentPage }) => {
  const questions = [
    {
      q: 'How long does a website take to build?',
      a: 'Timelines vary by scope. A business website can take 1–3 weeks, while complex web apps and e-commerce can take longer depending on features and integrations.'
    },
    {
      q: 'Do you build SEO-ready websites?',
      a: 'Yes. We implement on-page SEO basics (titles, meta descriptions, clean URLs, sitemap, robots, structured data where relevant) and ensure performance best practices.'
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. We can improve UI/UX, speed, SEO structure, and conversion flow while keeping your branding. We also migrate content and fix broken links when needed.'
    },
    {
      q: 'Do you work internationally?',
      a: 'Yes. We work with clients locally and internationally. Communication can be handled via WhatsApp, email, and video calls depending on your preference.'
    }
  ];

  const handleContact = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('contact');
    } else {
      window.history.pushState(null, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1 className="support-title">FAQ</h1>
          <p className="support-subtitle">
            Quick answers to common questions about our services, delivery, and support.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="support-faq-list">
            {questions.map((item, idx) => (
              <div className="support-faq-item" key={idx}>
                <div className="support-faq-q">{item.q}</div>
                <div className="support-faq-a">{item.a}</div>
              </div>
            ))}
          </div>

          <div className="support-cta">
            <h2 className="support-cta-title">Have a different question?</h2>
            <p className="support-cta-text">Message us and we’ll reply with details.</p>
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

export default FAQPage;

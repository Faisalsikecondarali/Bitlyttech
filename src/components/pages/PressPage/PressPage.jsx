import React from 'react';
import './PressPage.css';

const PressPage = ({ setCurrentPage }) => {
  const pressItems = [
    {
      title: 'Bitlyt Tech Solutions Launches SEO-Ready Web & App Services',
      date: '2026',
      text: 'Bitlyt Tech Solutions continues to expand its services across web development, mobile apps, UI/UX design, backend development, and technical SEO. Our focus is delivering fast, scalable, and conversion-focused digital products for businesses.'
    },
    {
      title: 'Performance-First Approach for Modern Websites',
      date: '2025',
      text: 'We prioritize Core Web Vitals and modern front-end best practices to help brands rank higher, load faster, and convert more users. Performance, accessibility, and clean architecture are part of every build.'
    },
    {
      title: 'Ongoing Support & Long-Term Partnerships',
      date: '2024',
      text: 'From launch to maintenance, Bitlyt Tech Solutions supports clients with monitoring, improvements, and reliable communication. Our goal is to build long-term relationships based on transparency and measurable results.'
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
          <h1 className="support-title">Press</h1>
          <p className="support-subtitle">
            News, announcements, and company updates from Bitlyt Tech Solutions.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="press-grid">
            {pressItems.map((item, idx) => (
              <article className="press-card" key={idx}>
                <div className="press-meta">{item.date}</div>
                <h2 className="press-title">{item.title}</h2>
                <p className="press-text">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="support-cta">
            <h2 className="support-cta-title">Press inquiries</h2>
            <p className="support-cta-text">
              For collaborations, media requests, or official information, contact our team.
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

export default PressPage;

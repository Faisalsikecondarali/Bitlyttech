import React from 'react';
import './HelpCenterPage.css';

const HelpCenterPage = ({ setCurrentPage }) => {
  const faqs = [
    {
      q: 'How do I start a project with Bitlyt Tech?',
      a: 'The fastest way is to contact us with your goals, timeline, and budget range. We will reply with questions, share a plan, and propose the best approach for web, mobile, UI/UX, or backend development.'
    },
    {
      q: 'Do you provide ongoing support after delivery?',
      a: 'Yes. We offer maintenance and support for bug fixes, performance optimization, security updates, and feature improvements. You can choose a support plan based on your needs.'
    },
    {
      q: 'What information should I share to get an accurate quote?',
      a: 'Share a short summary of your business, required features, reference websites/apps, and your preferred timeline. If you have wireframes or a scope document, that makes estimation faster.'
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
          <h1 className="support-title">Help Center</h1>
          <p className="support-subtitle">
            Find quick answers, guidance, and next steps for working with Bitlyt Tech Solutions.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="support-grid">
            <div className="support-card">
              <h2 className="support-card-title">Getting Started</h2>
              <p className="support-text">
                We help businesses build SEO-ready websites, high-performance web apps, mobile apps, and scalable backend systems. If you want the fastest path, tell us your objective and we will recommend the best tech stack and plan.
              </p>
            </div>

            <div className="support-card">
              <h2 className="support-card-title">Project Updates</h2>
              <p className="support-text">
                You will get clear milestones, progress updates, and deliverables. We share builds for review and iterate quickly so you stay in control of quality and timeline.
              </p>
            </div>

            <div className="support-card">
              <h2 className="support-card-title">Support & Maintenance</h2>
              <p className="support-text">
                After launch, we can monitor performance, fix issues, and optimize for SEO and conversions. Maintenance keeps your website secure, fast, and compatible with new browser and platform updates.
              </p>
            </div>
          </div>

          <div className="support-faq">
            <h2 className="support-section-title">Common Questions</h2>
            <div className="support-faq-list">
              {faqs.map((item, idx) => (
                <div className="support-faq-item" key={idx}>
                  <div className="support-faq-q">{item.q}</div>
                  <div className="support-faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="support-cta">
            <h2 className="support-cta-title">Still need help?</h2>
            <p className="support-cta-text">Contact our team and we’ll guide you to the right solution.</p>
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

export default HelpCenterPage;

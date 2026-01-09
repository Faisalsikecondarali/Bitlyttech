import React from 'react';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  const items = [
    {
      title: 'Services',
      text: 'Bitlyt Tech Solutions provides software and technology services including web development, mobile app development, UI/UX design, backend development, browser extensions, and IT consulting.'
    },
    {
      title: 'Project Scope & Delivery',
      text: 'Project scope is confirmed before work begins. Delivery timelines depend on features, feedback cycles, and approvals. Any additional features requested after scope confirmation may require a revised timeline and cost.'
    },
    {
      title: 'Payments',
      text: 'Payments are agreed in advance (milestone-based or fixed). Work may pause if payments are delayed. For long-term work, maintenance plans are available.'
    },
    {
      title: 'Client Responsibilities',
      text: 'Clients are responsible for providing content, access, and timely feedback. Delays in feedback may affect delivery timelines.'
    },
    {
      title: 'Limitation of Liability',
      text: 'We are not liable for indirect losses. We always aim to deliver quality work, but outcomes can also depend on third-party platforms, hosting, and external systems.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1 className="support-title">Terms of Service</h1>
          <p className="support-subtitle">
            These terms explain how our services work and what you can expect when working with us.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <div className="policy-card">
            {items.map((s, idx) => (
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

export default TermsOfServicePage;

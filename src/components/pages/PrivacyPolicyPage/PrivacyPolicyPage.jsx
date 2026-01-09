import React from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      text: 'When you contact us, we may collect basic details such as your name, email, phone number, and project requirements. We only collect information that helps us respond and deliver services.'
    },
    {
      title: 'How We Use Information',
      text: 'We use your information to communicate about your project, provide proposals, deliver services, and improve the website experience. We do not sell your personal data.'
    },
    {
      title: 'Cookies & Analytics',
      text: 'We may use cookies or analytics to understand website usage and improve performance. You can control cookies through your browser settings.'
    },
    {
      title: 'Data Security',
      text: 'We follow reasonable security practices to protect your information. However, no online system is 100% secure; we recommend not sharing sensitive credentials via chat.'
    },
    {
      title: 'Contact',
      text: 'If you have questions about this Privacy Policy, you can contact Bitlyt Tech Solutions through the Contact page.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1 className="support-title">Privacy Policy</h1>
          <p className="support-subtitle">
            We respect your privacy. This policy explains how we collect and use information.
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

export default PrivacyPolicyPage;

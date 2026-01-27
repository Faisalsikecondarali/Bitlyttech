import React from 'react';
import './Hero.css';

const Hero = ({ setCurrentPage }) => {
  const getQuarterlyOffer = () => {
    const month = new Date().getMonth();
    const quarterIndex = Math.floor(month / 3);

    const offers = [
      { label: 'New Year Offer', percent: 30 },
      { label: 'Spring Offer', percent: 20 },
      { label: 'Mid-Year Offer', percent: 25 },
      { label: 'Year-End Offer', percent: 15 }
    ];

    return offers[quarterIndex] || offers[0];
  };

  const offer = getQuarterlyOffer();

  const handleStartProjectClick = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'd like to start a project. Please share details.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWatchOurWorkClick = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="offer-badge" aria-label={`${offer.percent}% off offer`}>
              <span className="offer-badge-label">{offer.label}</span>
              <span className="offer-badge-percent">{offer.percent}% OFF</span>
              <span className="offer-badge-sub">This quarter</span>
            </div>
            <h1 className="hero-title">
              Transform Your Ideas Into
              <span className="highlight"> Digital Reality</span>
            </h1>
            <p className="hero-description white-text">
              We build innovative web solutions that drive growth and deliver exceptional user experiences. 
              From concept to deployment, we're your trusted technology partner.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleStartProjectClick}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary" onClick={handleWatchOurWorkClick}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#00D4FF" strokeWidth="1.5"/>
                  <polygon points="8,6 8,14 13,10" fill="#00D4FF"/>
                </svg>
                Watch Our Work
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">bitlyt-dashboard</div>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> solution</span>
                  <span className="code-operator"> =</span>
                  <span className="code-string"> 'innovation'</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">function</span>
                  <span className="code-function"> createFuture</span>
                  <span className="code-bracket">(</span>
                  <span className="code-parameter">technology</span>
                  <span className="code-bracket">)</span>
                  <span className="code-bracket"> {'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="code-keyword">return</span>
                  <span className="code-variable"> success</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">🚀</div>
                <div className="card-text">Fast Performance</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🔒</div>
                <div className="card-text">Secure Code</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⚡</div>
                <div className="card-text">Modern Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-gradient"></div>
    </section>
  );
};

export default Hero;

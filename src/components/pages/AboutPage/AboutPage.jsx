import React from 'react';
import './AboutPage.css';

const ourMissionImg = '/images/ourmission.jpg';
const ourVisionImg = '/images/ourvision.jpg';

const AboutPage = ({ setCurrentPage, currentPage, darkMode }) => {
  const missionImage = ourMissionImg;
  const visionImage = ourVisionImg;

  const handleLearnMoreClick = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPositionsClick = () => {
    const phoneNumber = '+923077902356';
    const message = "Hello! I'm interested in open positions. Please share details.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

const timeline = [
  {
    year: "2024",
    title: "Company Founded",
    description: "Our company was established in 2024 with a clear mission to deliver modern, reliable, and scalable digital solutions for businesses."
  },
  {
    year: "2024",
    title: "Team Building",
    description: "Built a strong and dedicated team of 15 skilled professionals including developers, designers, and project managers."
  },
  {
    year: "2025",
    title: "Project Milestone",
    description: "Successfully completed 10 client projects across web and mobile platforms, focusing on quality and timely delivery."
  },
  {
    year: "2024",
    title: "International Collaboration",
    description: "Started working with clients from 2 different countries, expanding our services beyond local boundaries."
  },
  {
    year: "2026",
    title: "Growing Reputation",
    description: "Earned client trust through consistent performance, transparent communication, and long-term support."
  }
];


  const values = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8v8m0 8v4m8-16h8m-8 8h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 20l4 4 12-12" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 12l8 8m-8-8l-8 8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Integrity",
      description: "We believe in transparent communication, ethical practices, and building long-term partnerships."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8v16m-8-8h16" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes our mission."
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Team Members" },
    { number: "2+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="about-page">
      
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Bitlyt Tech Solutions</h1>
            <p className="about-hero-subtitle">
              Transforming businesses through innovative technology solutions and exceptional digital experiences since 2024.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="about-stat" key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              Founded in 2024, Bitlyt Tech Solutions started as a small team of passionate developers 
              with a big dream: to help businesses leverage technology for growth. Today, we've grown into 
              a global technology partner serving clients across multiple continents.
            </p>
            <p className="story-text">
              Our journey has been marked by continuous innovation, learning, and adaptation to the ever-changing 
              digital landscape. We've evolved from a web development agency to a comprehensive technology 
              solutions provider offering everything from mobile apps to AI-powered systems.
            </p>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-container">
          <h2 className="section-title">Mission & Vision</h2>
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-image">
                <img 
                  src={missionImage} 
                  alt="Our Mission - AI and Cloud Technology" 
                  className="mission-img loaded"
                />
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To empower businesses with innovative technology solutions that drive growth, 
                enhance efficiency, and create exceptional digital experiences through cutting-edge AI and cloud technologies.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-image">
                <img 
                  src={visionImage} 
                  alt="Our Vision - Future Technology" 
                  className="mission-img loaded"
                />
              </div>
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-text">
                To be the global leader in digital transformation, helping businesses thrive in the 
                technology-driven future through innovative solutions and forward-thinking approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-cta">
        <div className="about-container">
          <div className="team-cta-content">
            <h2 className="section-title">Join Our Amazing Team</h2>
            <p className="team-cta-subtitle">
              We're always looking for talented people to join our mission and help us create exceptional digital experiences.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={handleOpenPositionsClick}>
                View Open Positions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="cta-button secondary" onClick={handleLearnMoreClick}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

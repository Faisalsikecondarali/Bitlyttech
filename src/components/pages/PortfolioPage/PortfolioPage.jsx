import React, { useState, useEffect } from 'react';
import './PortfolioPage.css';

const PortfolioPage = ({ setCurrentPage, currentPage }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPortfolioNotice, setShowPortfolioNotice] = useState(false);

  const categories = ['all', 'web', 'mobile', 'design', 'backend'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/images/ecommerce.png",
      description: "Modern e-commerce solution with advanced features including real-time inventory management, secure payment processing, and intuitive user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "FashionHub Inc.",
      year: "2024",
      features: ["Real-time Inventory", "Secure Payments", "Admin Dashboard", "Mobile Responsive"],
      link: "#"
    },
    {
      id: 2,
      title: "Food Delivery App",
      category: "mobile",
      image: "/images/App.webp",
      description: "Cross-platform mobile application for food ordering and delivery with real-time tracking, ratings, and seamless payment integration.",
      technologies: ["React Native", "Firebase", "Google Maps", "Push Notifications"],
      client: "QuickBite Restaurant",
      year: "2024",
      features: ["Real-time Tracking", "Push Notifications", "Rating System", "In-app Payments"],
      link: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "design",
      image: "/images/fooddelivery.webp",
      description: "Comprehensive financial dashboard with advanced data visualization, real-time analytics, and secure transaction processing.",
      technologies: ["Figma", "React", "D3.js", "Chart.js"],
      client: "Global Finance Corp",
      year: "2023",
      features: ["Data Visualization", "Real-time Analytics", "Secure Transactions", "Custom Reports"],
      link: "#"
    },
    {
      id: 4,
      title: "API Gateway",
      category: "backend",
      image: "/images/backend.jpg",
      description: "Scalable microservices architecture with API gateway, authentication, rate limiting, and comprehensive monitoring.",
      technologies: ["Python", "Docker", "Kubernetes", "PostgreSQL"],
      client: "TechStart Solutions",
      year: "2023",
      features: ["Microservices", "API Gateway", "Load Balancing", "Monitoring Dashboard"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "web",
      image: "/images/socail.webp",
      description: "Full-featured social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      technologies: ["Vue.js", "Socket.io", "Redis", "AWS S3"],
      client: "ConnectSphere",
      year: "2023",
      features: ["Real-time Chat", "Content Sharing", "Privacy Controls", "Video Streaming"],
      link: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "mobile",
      image: "/images/fitness.webp",
      description: "Comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      technologies: ["Flutter", "HealthKit", "Google Fit", "PostgreSQL"],
      client: "FitLife Studios",
      year: "2022",
      features: ["Workout Planning", "Progress Tracking", "Social Features", "Health Integration"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };;

  useEffect(() => {
    if (!showPortfolioNotice) return;
    const t = setTimeout(() => setShowPortfolioNotice(false), 2500);
    return () => clearTimeout(t);
  }, [showPortfolioNotice]);

  const handleStartProject = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('contact')
    } else {
      window.history.pushState(null, '', '/contact')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownloadPortfolio = () => {
    setShowPortfolioNotice(true)
  }

  return (
    <div className="portfolio-page">
      
      <section className="portfolio-hero">
        <div className="portfolio-hero-container">
          <div className="portfolio-hero-content">
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-number">4+</div>
                <div className="stat-label">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-container">
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="view-project-btn" onClick={() => openProjectModal(project)}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5l5 5m0 10l-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Project
                    </button>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-meta">
                    <div className="project-client">
                      <h4>Client</h4>
                      <p>{project.client}</p>
                    </div>
                    <div className="project-year">
                      <h4>Year</h4>
                      <p>{project.year}</p>
                    </div>
                  </div>
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta-container">
          <h2>Have a Project in Mind?</h2>
          <p>Let's work together to bring your vision to life with our expertise and passion.</p>
          <div className="cta-buttons">
            <button className="cta-primary" type="button" onClick={handleStartProject}>
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cta-secondary" type="button" onClick={handleDownloadPortfolio}>
              Download Portfolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 2v8m0 4v4m4-8h4m-4 4h4" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {showPortfolioNotice && (
        <div className="portfolio-toast" role="status" aria-live="polite">
          <div className="portfolio-toast-card">
            <div className="portfolio-toast-text">This section is under working.</div>
            <button className="portfolio-toast-close" type="button" onClick={() => setShowPortfolioNotice(false)}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="close-modal" onClick={closeProjectModal}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <h4>Project Details</h4>
                <p>{selectedProject.description}</p>
                <div className="modal-tech">
                  <h5>Technologies</h5>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-features">
                  <h5>Key Features</h5>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-meta">
                  <div className="modal-client">
                    <h5>Client</h5>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div className="modal-year">
                    <h5>Year</h5>
                    <p>{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-cta" onClick={() => window.open(selectedProject.link, '_blank')}>
                View Live Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;

import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO, TechStart Inc.",
      content: "Bitlyt Tech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise are outstanding.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Alex+Thompson&background=00D4FF&color=fff&size=60"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager, InnovateCo",
      content: "The portfolio website they created for us perfectly showcases our brand and has significantly improved our online presence.",
      rating: 4.9,
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0099CC&color=fff&size=60"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Marketing Director, DigitalFlow",
      content: "Outstanding creative work and strategic thinking. They understood our vision and brought it to life beautifully.",
      rating: 4.8,
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=00D4FF&color=fff&size=60"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="testimonial-rating">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} className="star full">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="star empty">★</span>
        ))}
      </div>
    );
  };
  
  const categories = ['all', 'web', 'mobile', 'design', 'backend'];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://ui-avatars.com/api/?name=E+Commerce&background=00D4FF&color=fff&size=400x300",
      description: "Modern online shopping experience with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Food Delivery App",
      category: "mobile",
      image: "https://ui-avatars.com/api/?name=Food+App&background=0099CC&color=fff&size=400x300",
      description: "Cross-platform mobile app for food ordering",
      tags: ["React Native", "Firebase", "Maps"],
      link: "#"
    },
    {
      id: 3,
      title: "Banking Dashboard",
      category: "design",
      image: "https://ui-avatars.com/api/?name=Dashboard&background=00D4FF&color=fff&size=400x300",
      description: "Financial dashboard with data visualization",
      tags: ["UI/UX", "Charts.js", "D3.js"],
      link: "#"
    },
    {
      id: 4,
      title: "API Gateway",
      category: "backend",
      image: "https://ui-avatars.com/api/?name=API+Gateway&background=0099CC&color=fff&size=400x300",
      description: "Scalable microservices architecture",
      tags: ["Python", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "web",
      image: "https://ui-avatars.com/api/?name=Social+Media&background=00D4FF&color=fff&size=400x300",
      description: "Real-time social networking application",
      tags: ["Vue.js", "Socket.io", "Redis"],
      link: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://ui-avatars.com/api/?name=Fitness+Tracker&background=0099CC&color=fff&size=400x300",
      description: "Health and fitness tracking mobile app",
      tags: ["Flutter", "HealthKit", "Google Fit"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Portfolio</h2>
          <p className="portfolio-subtitle">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
          
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
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-btn">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="portfolio-testimonials">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">Client Testimonials</h2>
              <p className="testimonials-subtitle">
                Hear what our clients have to say about working with us on their portfolio projects.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="testimonial-content">
                    <p>"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="portfolio-cta">
          <h3>Have a project in mind?</h3>
          <p>Let's work together to bring your ideas to life</p>
          <button className="cta-btn">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

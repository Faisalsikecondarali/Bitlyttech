import React from 'react';
import './Services.css';
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiIos,
  SiAndroid,
  SiFigma,
  SiSketch,
  SiGraphql,
  SiGooglechrome,
  SiFirefoxbrowser
} from 'react-icons/si';
import { FaSearch, FaDatabase, FaCloud, FaPuzzlePiece, FaMobileAlt, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Services = ({ setCurrentPage }) => {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="24" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M16 20h16M16 24h12M16 28h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React", "Vue", "Angular", "Node.js", "Python", "Responsive Design", "SEO Optimized"],
      page: 'web-development'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="8" width="24" height="32" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M20 32h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="36" r="1" fill="#00D4FF"/>
        </svg>
      ),
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "iOS", "Android", "App Store Deployment"],
      page: 'mobile-apps'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 24l8-8 6 6 12-12" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="38" cy="10" r="6" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces with exceptional user experience.",
      features: ["Figma", "Sketch", "User Research", "Prototyping", "Design Systems"],
      page: 'ui-design'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M16 16h16M16 20h12M16 24h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and security.",
      features: ["REST APIs", "GraphQL", "Database Design", "Cloud Deployment"],
      page: 'backend'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8v8m0 8v8m8-16h8m-8 8h8M8 24h8m-8 8h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="6" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Browser Extensions",
      description: "Custom browser extensions for Chrome, Firefox, and other major browsers.",
      features: ["Chrome Extensions", "Firefox Add-ons", "Cross-browser", "API Integration"],
      page: 'extension'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8v12l6 6" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="12" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "IT Consulting",
      description: "Expert technology consulting to help you make the right technical decisions.",
      features: ["Architecture Design", "Tech Stack Selection", "Performance Audit", "Strategy Planning"],
      page: 'consulting'
    }
  ];

  const pageToPath = (page) => {
    switch (page) {
      case 'web-development':
        return '/web-development'
      case 'mobile-apps':
        return '/mobile-apps'
      case 'ui-design':
        return '/ui-design'
      case 'backend':
        return '/backend'
      case 'extension':
        return '/extension'
      case 'consulting':
        return '/consulting'
      default:
        return '/'
    }
  }

  const handleViewDetails = (page) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(page)
      return
    }
    window.history.pushState(null, '', pageToPath(page))
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const getFeatureIcons = (feature) => {
    switch (feature) {
      case 'React':
        return [{ Icon: SiReact, color: '#61DAFB' }]
      case 'Vue':
        return [{ Icon: SiVuedotjs, color: '#42B883' }]
      case 'Angular':
        return [{ Icon: SiAngular, color: '#DD0031' }]
      case 'React Native':
        return [
          { Icon: SiReact, color: '#61DAFB' },
          { Icon: FaMobileAlt, color: '#0EA5E9' }
        ]
      case 'Node.js':
        return [{ Icon: SiNodedotjs, color: '#339933' }]
      case 'Python':
        return [{ Icon: SiPython, color: '#3776AB' }]
      case 'Responsive Design':
        return [
          { Icon: FaLaptopCode, color: '#0EA5E9' },
          { Icon: FaMobileAlt, color: '#0EA5E9' }
        ]
      case 'SEO Optimized':
        return [{ Icon: FaSearch, color: '#F59E0B' }]
      case 'Flutter':
        return [{ Icon: SiFlutter, color: '#02569B' }]
      case 'iOS':
        return [{ Icon: SiIos, color: '#111827' }]
      case 'Android':
        return [{ Icon: SiAndroid, color: '#3DDC84' }]
      case 'App Store Deployment':
        return [{ Icon: FaRocket, color: '#A855F7' }]
      case 'REST APIs':
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
      case 'GraphQL':
        return [{ Icon: SiGraphql, color: '#E10098' }]
      case 'Database Design':
        return [{ Icon: FaDatabase, color: '#64748B' }]
      case 'Cloud Deployment':
        return [{ Icon: FaCloud, color: '#38BDF8' }]
      case 'API Integration':
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
      case 'Figma':
        return [{ Icon: SiFigma, color: '#F24E1E' }]
      case 'Sketch':
        return [{ Icon: SiSketch, color: '#F7B500' }]
      case 'User Research':
        return [{ Icon: FaSearch, color: '#F59E0B' }]
      case 'Prototyping':
        return [{ Icon: MdDesignServices, color: '#06B6D4' }]
      case 'Design Systems':
        return [{ Icon: MdDesignServices, color: '#06B6D4' }]
      case 'Chrome Extensions':
        return [{ Icon: SiGooglechrome, color: '#4285F4' }]
      case 'Firefox Add-ons':
        return [{ Icon: SiFirefoxbrowser, color: '#FF7139' }]
      case 'Cross-browser':
        return [
          { Icon: SiGooglechrome, color: '#4285F4' },
          { Icon: SiFirefoxbrowser, color: '#FF7139' }
        ]
      case 'Architecture Design':
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
      case 'Tech Stack Selection':
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
      case 'Performance Audit':
        return [{ Icon: FaSearch, color: '#F59E0B' }]
      case 'Strategy Planning':
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
      default:
        return [{ Icon: FaPuzzlePiece, color: '#0EA5E9' }]
    }
  }

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            We offer comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-header">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.features.map((feature, featureIndex) => (
                    <span className="service-tag" key={featureIndex}>
                      <span className="service-tag-icon">
                        {getFeatureIcons(feature).map(({ Icon, color }, iconIndex) => (
                          <Icon key={iconIndex} size={14} aria-hidden="true" style={{ color }} />
                        ))}
                      </span>
                      <span className="service-tag-text">{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="service-card-footer">
                <button className="service-btn" type="button" onClick={() => handleViewDetails(service.page)}>
                  View Details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

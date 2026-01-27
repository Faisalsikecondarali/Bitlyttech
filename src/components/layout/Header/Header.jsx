import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../common/Logo/Logo';
import './Header.css';

// Services data
const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L12 13L21 8M5 15L12 19L19 15M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Custom websites and web applications',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: 'iOS and Android applications',
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: 'User interface and experience design',
  },
  {
    id: 'extension',
    title: 'Extension',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L10.59 3.41L16.17 9H4V11H18V9H13L18 14L20 12L12 4V2ZM20 19V12H22V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V12H4V19H20Z" fill="currentColor"/>
      </svg>
    ),
    description: 'Browser extensions and plugins',
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 10H12.01M16 10H16.01M8 10H8.01M12 14H12.01M16 14H16.01M8 14H8.01M12 14V18M12 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: 'Server-side development',
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Technology strategy and planning',
  },
];

const Header = ({ setCurrentPage, currentPage, darkMode, toggleDarkMode }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Close only if clicking outside the dropdown
        setIsServicesOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);  // Only re-run when isServicesOpen changes

  const handleNavClick = (page, e) => {
    // Prevent default to avoid page reload
    if (e) {
      e.preventDefault();
    }
    
    // Set the current page
    setCurrentPage(page);
    
    // Close dropdown only if clicking outside the dropdown menu
    if (!e || !e.target.closest('.dropdown-menu')) {
      setIsServicesOpen(false);
    }

    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileServicesOpen(false);
      }
      return next;
    });
  };

  const toggleMobileServices = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsMobileServicesOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Logo darkMode={darkMode} />
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            </li>
            <li 
              className="nav-item services-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`nav-link ${services.some(s => s.id === currentPage) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg 
                  className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M1 1L5 5L9 1" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div 
                className={`dropdown-menu ${isServicesOpen ? 'open' : ''}`}
                role="menu"
                aria-label="Services menu"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <a 
                    key={service.id}
                    href={`/${service.id}`}
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(service.id, e);
                    }}
                  >
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    {service.title}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className={`nav-link ${currentPage === 'portfolio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="/" className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            </li>
            <li className="mobile-nav-item">
              <button
                className={`mobile-nav-link mobile-services-toggle ${services.some(s => s.id === currentPage) ? 'active' : ''}`}
                onClick={toggleMobileServices}
                aria-expanded={isMobileServicesOpen}
                aria-haspopup="true"
                type="button"
              >
                Services
                <svg
                  className={`dropdown-arrow ${isMobileServicesOpen ? 'open' : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`mobile-services-menu ${isMobileServicesOpen ? 'open' : ''}`}>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`/${service.id}`}
                    className="mobile-services-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(service.id, e);
                    }}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </li>
            <li className="mobile-nav-item">
              <a href="/portfolio" className={`mobile-nav-link ${currentPage === 'portfolio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Portfolio</a>
            </li>
            <li className="mobile-nav-item">
              <a href="/about" className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            </li>
            <li className="mobile-nav-item">
              <a href="/contact" className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="header-actions">
          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            {darkMode ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="4" stroke="#f1f5f9" strokeWidth="1.5"/>
                <path d="M9 1v2m0 12v2m6.36-6.36l1.42 1.42M1.22 1.22l1.42 1.42m12.72 12.72l1.42 1.42M1.22 16.78l1.42-1.42" stroke="#f1f5f9" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.5 9.75C16.5 13.75 13.25 17 9.25 17C7.5 17 5.75 16.25 4.5 15C7.25 15.75 10.5 14.75 12.25 12C14 9.25 13.25 6 11.25 4.25C12.5 4.75 13.75 5.75 14.5 7C15.75 8.5 16.5 10.25 16.5 12.25V9.75Z" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button
            className="get-quote-btn"
            type="button"
            onClick={(e) => handleNavClick('blog', e)}
          >
            <span className="quote-text">Blog</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

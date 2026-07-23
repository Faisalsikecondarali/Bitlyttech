import React, { useEffect } from 'react';
import './HospitalManagement.css';

const HospitalManagement = () => {
  useEffect(() => {
    // Add JSON-LD Schema Markup for Product
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Hospital Management System",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web-based, Windows, Mac, Linux",
      "offers": {
        "@type": "Offer",
        "price": "40.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.bitlyttech.org/hospital-management",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        }
      },
      "description": "Complete hospital management system with patient management, appointment scheduling, billing, pharmacy integration, and laboratory management. Perfect for hospitals, clinics, and healthcare facilities.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "58",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Patient Management",
        "Appointment Scheduling",
        "Billing & Insurance",
        "Pharmacy Integration",
        "Laboratory Management",
        "Doctor & Staff Management",
        "Bed Management",
        "Medical Records",
        "Prescription Management",
        "Reports & Analytics"
      ],
      "keywords": "hospital management system, hospital software, healthcare management, clinic management system, patient management software, hospital ERP, medical practice management, hospital administration software, healthcare IT, hospital information system"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add FAQ Schema for Featured Snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Hospital Management System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hospital Management System is a comprehensive software solution that helps healthcare facilities manage patients, appointments, billing, pharmacy, laboratory, and daily operations efficiently through a single platform."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the Hospital Management System cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Hospital Management System starts at $40 with flexible pricing packages. Choose from Basic, Professional, or Enterprise plans based on your healthcare facility needs. One-time payment with no subscription."
          }
        },
        {
          "@type": "Question",
          "name": "What features are included in the hospital software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our hospital software includes patient management, appointment scheduling, billing & insurance, pharmacy integration, laboratory management, doctor & staff management, bed management, medical records, prescription management, and comprehensive reports."
          }
        },
        {
          "@type": "Question",
          "name": "Is the system suitable for small clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our hospital management system is scalable and suitable for small clinics, medium-sized hospitals, and large healthcare facilities. The modular design allows customization based on facility size and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Does it include pharmacy and laboratory modules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our system includes integrated pharmacy management for medicine inventory and prescription handling, plus laboratory management for test tracking and report generation. All modules work seamlessly together."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'Hospital Management System - Best Hospital Software | Healthcare Management $40';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Complete hospital management system with patient management, appointment scheduling, billing, pharmacy integration & laboratory management. Best hospital software for healthcare facilities. Starting at $40.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'hospital management system, hospital software, healthcare management, clinic management system, patient management software, hospital ERP, medical practice management, hospital administration software, healthcare IT, hospital information system');

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00D4FF" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Patient Management",
      description: "Complete patient records with medical history, demographics, and treatment tracking."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Appointment Scheduling",
      description: "Smart appointment booking with doctor availability and automated reminders."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="2" y1="10" x2="22" y2="10" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Billing & Insurance",
      description: "Complete billing system with insurance claims, invoicing, and payment processing."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Pharmacy Integration",
      description: "Integrated pharmacy management for medicine dispensing and inventory control."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="6" y1="1" x2="6" y2="4" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="10" y1="1" x2="10" y2="4" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="14" y1="1" x2="14" y2="4" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Laboratory Management",
      description: "Complete lab test management with result tracking and report generation."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Medical Records",
      description: "Digital medical records with secure storage and easy retrieval."
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: 40,
      originalPrice: 80,
      features: [
        "Single Clinic",
        "Up to 500 Patients",
        "Patient Management",
        "Appointment Scheduling",
        "Basic Billing",
        "Medical Records",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 80,
      originalPrice: 160,
      features: [
        "Up to 5 Clinics",
        "Up to 5,000 Patients",
        "Advanced Patient Management",
        "Pharmacy Integration",
        "Laboratory Management",
        "Insurance Billing",
        "Priority Support",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 150,
      originalPrice: 300,
      features: [
        "Unlimited Clinics",
        "Unlimited Patients",
        "Complete Hospital Management",
        "Multi-Department Support",
        "Custom Integrations",
        "Advanced Analytics",
        "24/7 Support",
        "White Label Option"
      ],
      popular: false
    }
  ];

  const handleWhatsAppPurchase = (packageName, price) => {
    const message = `Hi! I'm interested in buying the ${packageName} package of Hospital Management System for $${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="hospital-management-page">
      
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Hospital Management System - Complete Healthcare Solution</h1>
            <p className="product-hero-subtitle">
              Comprehensive hospital management system with patient management, appointment scheduling, billing, pharmacy integration, and laboratory management. The best hospital software for healthcare facilities. Starting at $40.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary purchase-btn" onClick={() => handleWhatsAppPurchase('Basic', 40)}>
                Get Started - From $40
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                View Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="special-offer">
              <span className="offer-badge">💰 50% OFF</span>
              <span className="offer-text">Limited time discount on all packages!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="product-container">
          <h2 className="section-title">Complete Hospital Management Features</h2>
          <p className="section-subtitle">Our hospital software includes all essential modules for efficient healthcare facility management</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-packages">
        <div className="product-container">
          <h2 className="section-title">Choose Your Package</h2>
          <p className="section-subtitle">Flexible pricing plans to suit healthcare facilities of all sizes</p>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div className={`package-card ${pkg.popular ? 'popular' : ''}`} key={index}>
                {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="original-price">${pkg.originalPrice}</span>
                  <span className="current-price">${pkg.price}</span>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button 
                  className={`btn-primary ${pkg.popular ? 'popular-btn' : ''}`}
                  onClick={() => handleWhatsAppPurchase(pkg.name, pkg.price)}
                >
                  Buy {pkg.name} Package
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-how-it-works">
        <div className="product-container">
          <h2 className="section-title">How Our Hospital Management System Works</h2>
          <p className="section-subtitle">Transform your healthcare facility operations in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Setup Your Facility</h3>
              <p className="step-description">Configure hospital details, departments, and doctor profiles</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Add Patients</h3>
              <p className="step-description">Import patient data and create medical records</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Configure Modules</h3>
              <p className="step-description">Set up pharmacy, laboratory, and billing modules</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Start Managing</h3>
              <p className="step-description">Begin using all modules for efficient hospital administration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-faq">
        <div className="product-container">
          <h2 className="section-title">Frequently Asked Questions About Hospital Management System</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is Hospital Management System?</h3>
              <p className="faq-answer">Hospital Management System is a comprehensive software solution that helps healthcare facilities manage patients, appointments, billing, pharmacy, laboratory, and daily operations efficiently through a single platform. It's the best hospital software for modern healthcare management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much does the Hospital Management System cost?</h3>
              <p className="faq-answer">Our Hospital Management System starts at $40 with flexible pricing packages. Choose from Basic ($40), Professional ($80), or Enterprise ($150) plans based on your healthcare facility needs. One-time payment with no subscription fees.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What features are included in the hospital software?</h3>
              <p className="faq-answer">Our hospital software includes patient management, appointment scheduling, billing & insurance, pharmacy integration, laboratory management, doctor & staff management, bed management, medical records, prescription management, and comprehensive reports and analytics.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is the system suitable for small clinics?</h3>
              <p className="faq-answer">Yes, our hospital management system is scalable and suitable for small clinics, medium-sized hospitals, and large healthcare facilities. The modular design allows customization based on facility size and specific requirements.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Does it include pharmacy and laboratory modules?</h3>
              <p className="faq-answer">Absolutely! Our system includes integrated pharmacy management for medicine inventory and prescription handling, plus laboratory management for test tracking and report generation. All modules work seamlessly together for complete healthcare management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is patient data secure?</h3>
              <p className="faq-answer">Yes, our hospital management system prioritizes patient data security with encrypted storage, role-based access control, and compliance with healthcare data protection regulations. Patient privacy and data security are our top priorities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalManagement;

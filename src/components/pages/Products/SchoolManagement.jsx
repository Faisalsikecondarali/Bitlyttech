import React, { useEffect } from 'react';
import './SchoolManagement.css';

const SchoolManagement = () => {
  useEffect(() => {
    // Add JSON-LD Schema Markup for Product
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "School Management System",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web-based, Windows, Mac, Linux",
      "offers": {
        "@type": "Offer",
        "price": "40.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.bitlyttech.org/school-management",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        }
      },
      "description": "Complete school management system with student management, attendance tracking, fee management, exam management, and parent portal. Perfect for schools, colleges, and educational institutions.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "89",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Student Information Management",
        "Attendance Tracking System",
        "Fee Management & Payment",
        "Exam & Grade Management",
        "Teacher & Staff Management",
        "Parent Portal & Communication",
        "Library Management",
        "Transport Management",
        "Timetable & Schedule Management",
        "Report Card Generation"
      ],
      "keywords": "school management system, school management software, school administration software, student management system, school ERP, educational management system, college management system, school attendance system, fee management software, school portal"
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
          "name": "What is School Management System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "School Management System is a comprehensive software solution that helps educational institutions manage student data, attendance, fees, exams, teachers, and daily operations efficiently through a single platform."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the School Management System cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our School Management System starts at $40 with flexible pricing packages. Choose from Basic, Professional, or Enterprise plans based on your school needs. One-time payment with no subscription."
          }
        },
        {
          "@type": "Question",
          "name": "What features are included in the School ERP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our School ERP includes student management, attendance tracking, fee management, exam management, teacher portal, parent communication, library management, transport management, timetable scheduling, and report card generation."
          }
        },
        {
          "@type": "Question",
          "name": "Is the School Management System easy to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our school management software is designed with a user-friendly interface that requires minimal training. Teachers, administrators, and parents can easily navigate and use all features."
          }
        },
        {
          "@type": "Question",
          "name": "Can parents access the School Management System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our system includes a dedicated parent portal where parents can view their child's attendance, grades, fee status, homework, and communicate with teachers."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'School Management System - Best School ERP Software | Student Management $40';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Complete school management system with student management, attendance tracking, fee management, exam management & parent portal. Best school ERP software for educational institutions. Starting at $40.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'school management system, school management software, school administration software, student management system, school ERP, educational management system, college management system, school attendance system, fee management software, school portal, school information system');

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Student Management",
      description: "Complete student information system with profiles, academic records, and personal details management."
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
      title: "Attendance Tracking",
      description: "Automated attendance system with daily tracking, reports, and parent notifications."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fee Management",
      description: "Complete fee collection system with payment tracking, receipts, and automated reminders."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="14 2 14 8 20 8" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="10 9 9 9 8 9" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Exam Management",
      description: "Comprehensive exam scheduling, grading system, and report card generation."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Teacher Portal",
      description: "Dedicated portal for teachers to manage classes, assignments, and student performance."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Parent Communication",
      description: "Real-time communication between parents and teachers with notifications and updates."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Library Management",
      description: "Complete library system with book tracking, issue/return management, and fine calculation."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="3" width="15" height="13" stroke="#00D4FF" strokeWidth="2"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="#00D4FF" strokeWidth="2"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="#00D4FF" strokeWidth="2"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Transport Management",
      description: "School transport management with route planning, vehicle tracking, and safety monitoring."
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: 40,
      originalPrice: 80,
      features: [
        "Single School",
        "Up to 500 Students",
        "Student Management",
        "Attendance Tracking",
        "Basic Fee Management",
        "Exam Management",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 80,
      originalPrice: 160,
      features: [
        "Up to 5 Schools",
        "Up to 5,000 Students",
        "Advanced Student Management",
        "Parent Portal",
        "Library Management",
        "Transport Management",
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
        "Unlimited Schools",
        "Unlimited Students",
        "Complete School ERP",
        "Multi-Campus Support",
        "Custom Integrations",
        "Advanced Analytics",
        "24/7 Support",
        "White Label Option"
      ],
      popular: false
    }
  ];

  const handleWhatsAppPurchase = (packageName, price) => {
    const message = `Hi! I'm interested in buying the ${packageName} package of School Management System for $${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="school-management-page">
      
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">School Management System - Complete School ERP Software</h1>
            <p className="product-hero-subtitle">
              Comprehensive school management system with student management, attendance tracking, fee management, exam management, and parent portal. The best school ERP software for educational institutions. Starting at $40.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary purchase-btn" onClick={() => handleWhatsAppPurchase('Basic', 40)}>
                Get Started - From $40
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Request Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="special-offer">
              <span className="offer-badge">� 50% OFF</span>
              <span className="offer-text">Limited time discount on all packages!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="product-container">
          <h2 className="section-title">Complete School Management System Features</h2>
          <p className="section-subtitle">Our school ERP software includes all essential modules for efficient educational institution management</p>
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
          <p className="section-subtitle">Flexible pricing plans to suit educational institutions of all sizes</p>
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
          <h2 className="section-title">How Our School Management System Works</h2>
          <p className="section-subtitle">Transform your educational institution management in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Setup Your School</h3>
              <p className="step-description">Configure school details, classes, sections, and academic year</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Add Students & Staff</h3>
              <p className="step-description">Import student data and create teacher/staff accounts</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Configure Settings</h3>
              <p className="step-description">Set up fee structure, exam schedules, and attendance rules</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Start Managing</h3>
              <p className="step-description">Begin using all modules for efficient school administration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-faq">
        <div className="product-container">
          <h2 className="section-title">Frequently Asked Questions About School Management System</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is School Management System?</h3>
              <p className="faq-answer">School Management System is a comprehensive software solution that helps educational institutions manage student data, attendance, fees, exams, teachers, and daily operations efficiently through a single platform. It's the best school ERP for modern educational management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much does the School Management System cost?</h3>
              <p className="faq-answer">Our School Management System starts at $40 with flexible pricing packages. Choose from Basic ($40), Professional ($80), or Enterprise ($150) plans based on your school needs. One-time payment with no subscription fees.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What features are included in the School ERP?</h3>
              <p className="faq-answer">Our School ERP includes student management, attendance tracking, fee management, exam management, teacher portal, parent communication, library management, transport management, timetable scheduling, and report card generation. All essential modules for complete school administration.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is the School Management System easy to use?</h3>
              <p className="faq-answer">Yes, our school management software is designed with a user-friendly interface that requires minimal training. Teachers, administrators, and parents can easily navigate and use all features. We also provide documentation and support.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can parents access the School Management System?</h3>
              <p className="faq-answer">Absolutely! Our system includes a dedicated parent portal where parents can view their child's attendance, grades, fee status, homework, and communicate with teachers. Real-time notifications keep parents informed about school activities.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is this suitable for colleges and universities?</h3>
              <p className="faq-answer">Yes, our school management system is scalable and suitable for schools, colleges, coaching centers, and universities. The modular design allows customization based on institution size and requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolManagement;

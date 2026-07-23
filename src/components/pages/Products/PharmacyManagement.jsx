import React, { useEffect } from 'react';
import './PharmacyManagement.css';

const PharmacyManagement = () => {
  useEffect(() => {
    // Add JSON-LD Schema Markup for Product
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Pharmacy Management System",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web-based, Windows, Mac, Linux",
      "offers": {
        "@type": "Offer",
        "price": "50.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.bitlyttech.org/pharmacy-management",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        }
      },
      "description": "Complete pharmacy management system with inventory management, billing, prescription management, expiry tracking, and supplier management. Perfect for pharmacies, medical stores, and healthcare facilities.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "76",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Inventory Management",
        "Billing & Invoicing",
        "Prescription Management",
        "Expiry Date Tracking",
        "Supplier Management",
        "Customer Management",
        "Sales Reports & Analytics",
        "Barcode Scanning",
        "Multi-Store Support",
        "GST & Tax Compliance"
      ],
      "keywords": "pharmacy management system, pharmacy software, medical store management, pharmacy inventory system, pharmacy billing software, drug store management, medicine inventory, pharmacy POS, pharmacy management software, pharmaceutical management"
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
          "name": "What is Pharmacy Management System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharmacy Management System is a comprehensive software solution that helps pharmacies manage inventory, billing, prescriptions, expiry tracking, and daily operations efficiently through a single platform."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the Pharmacy Management System cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Pharmacy Management System starts at $50 with flexible pricing packages. Choose from Basic, Professional, or Enterprise plans based on your pharmacy needs. One-time payment with no subscription."
          }
        },
        {
          "@type": "Question",
          "name": "What features are included in the pharmacy software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pharmacy software includes inventory management, billing & invoicing, prescription management, expiry date tracking, supplier management, customer database, sales reports, barcode scanning, multi-store support, and GST compliance."
          }
        },
        {
          "@type": "Question",
          "name": "Does the system track medicine expiry dates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our pharmacy management system automatically tracks medicine expiry dates and sends alerts before products expire. This helps prevent losses and ensures only safe medicines are sold to customers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage multiple pharmacy stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our pharmacy software supports multi-store management, allowing you to manage inventory, sales, and reports across multiple pharmacy locations from a single dashboard."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'Pharmacy Management System - Best Pharmacy Software | Medical Store $50';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Complete pharmacy management system with inventory management, billing, prescription management, expiry tracking & supplier management. Best pharmacy software for medical stores. Starting at $50.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'pharmacy management system, pharmacy software, medical store management, pharmacy inventory system, pharmacy billing software, drug store management, medicine inventory, pharmacy POS, pharmacy management software, pharmaceutical management');

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Inventory Management",
      description: "Complete medicine inventory tracking with stock levels, reorder points, and automated alerts."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="2" y1="10" x2="22" y2="10" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Billing & Invoicing",
      description: "Fast billing system with multiple payment methods, invoice generation, and tax calculation."
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
      title: "Prescription Management",
      description: "Digital prescription handling with doctor integration and medicine recommendations."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="12 6 12 12 16 14" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Expiry Tracking",
      description: "Automatic expiry date alerts and batch tracking to prevent expired medicine sales."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00D4FF" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Supplier Management",
      description: "Complete supplier database with purchase orders, delivery tracking, and payment management."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#00D4FF" strokeWidth="2"/>
          <circle cx="12" cy="7" r="4" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Customer Management",
      description: "Customer database with purchase history, loyalty programs, and contact management."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="18" y1="20" x2="18" y2="10" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="12" y1="20" x2="12" y2="4" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="6" y1="20" x2="6" y2="14" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Sales Analytics",
      description: "Comprehensive reports on sales, inventory, profits, and performance metrics."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3h5l5 5 5-5h5v5l-5 5 5 5v5h-5l-5-5-5 5H3v-5l5-5-5-5V3z" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Barcode Scanning",
      description: "Integrated barcode scanner for fast product lookup and accurate billing."
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: 50,
      originalPrice: 100,
      features: [
        "Single Pharmacy",
        "Up to 500 Products",
        "Basic Inventory",
        "Billing & Invoicing",
        "Supplier Management",
        "Basic Reports",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 100,
      originalPrice: 200,
      features: [
        "Up to 5 Pharmacies",
        "Up to 5,000 Products",
        "Advanced Inventory",
        "Prescription Management",
        "Expiry Tracking",
        "Advanced Analytics",
        "Priority Support",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 200,
      originalPrice: 400,
      features: [
        "Unlimited Pharmacies",
        "Unlimited Products",
        "Complete Pharmacy Management",
        "Multi-Store Support",
        "Custom Integrations",
        "Advanced Analytics",
        "24/7 Support",
        "White Label Option"
      ],
      popular: false
    }
  ];

  const handleWhatsAppPurchase = (packageName, price) => {
    const message = `Hi! I'm interested in buying the ${packageName} package of Pharmacy Management System for $${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pharmacy-management-page">
      
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Pharmacy Management System - Complete Pharmacy Software</h1>
            <p className="product-hero-subtitle">
              Comprehensive pharmacy management system with inventory management, billing, prescription management, expiry tracking, and supplier management. The best pharmacy software for medical stores and healthcare facilities. Starting at $50.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary purchase-btn" onClick={() => handleWhatsAppPurchase('Basic', 50)}>
                Get Started - From $50
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
          <h2 className="section-title">Complete Pharmacy Management System Features</h2>
          <p className="section-subtitle">Our pharmacy software includes all essential modules for efficient medical store management</p>
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
          <p className="section-subtitle">Flexible pricing plans to suit pharmacies of all sizes</p>
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
          <h2 className="section-title">How Our Pharmacy Management System Works</h2>
          <p className="section-subtitle">Transform your pharmacy operations in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Setup Your Pharmacy</h3>
              <p className="step-description">Configure pharmacy details, tax rates, and business settings</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Add Inventory</h3>
              <p className="step-description">Import medicines, set stock levels, and configure suppliers</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Start Billing</h3>
              <p className="step-description">Begin fast billing with barcode scanning and invoice generation</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Track & Manage</h3>
              <p className="step-description">Monitor sales, inventory, and performance through analytics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-faq">
        <div className="product-container">
          <h2 className="section-title">Frequently Asked Questions About Pharmacy Management System</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is Pharmacy Management System?</h3>
              <p className="faq-answer">Pharmacy Management System is a comprehensive software solution that helps pharmacies manage inventory, billing, prescriptions, expiry tracking, and daily operations efficiently through a single platform. It's the best pharmacy software for modern medical store management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much does the Pharmacy Management System cost?</h3>
              <p className="faq-answer">Our Pharmacy Management System starts at $50 with flexible pricing packages. Choose from Basic ($50), Professional ($100), or Enterprise ($200) plans based on your pharmacy needs. One-time payment with no subscription fees.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What features are included in the pharmacy software?</h3>
              <p className="faq-answer">Our pharmacy software includes inventory management, billing & invoicing, prescription management, expiry date tracking, supplier management, customer database, sales reports, barcode scanning, multi-store support, and GST compliance. All essential modules for complete pharmacy operations.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Does the system track medicine expiry dates?</h3>
              <p className="faq-answer">Yes, our pharmacy management system automatically tracks medicine expiry dates and sends alerts before products expire. This helps prevent losses and ensures only safe medicines are sold to customers. Batch-wise tracking is also supported.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I manage multiple pharmacy stores?</h3>
              <p className="faq-answer">Absolutely! Our pharmacy software supports multi-store management, allowing you to manage inventory, sales, and reports across multiple pharmacy locations from a single dashboard. Centralized control for chain pharmacies.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is barcode scanning supported?</h3>
              <p className="faq-answer">Yes, our pharmacy management system includes integrated barcode scanning support. You can use barcode scanners for fast product lookup, accurate billing, and efficient inventory management. Compatible with most barcode scanners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PharmacyManagement;

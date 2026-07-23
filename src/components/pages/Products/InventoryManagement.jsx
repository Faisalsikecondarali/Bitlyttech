import React, { useEffect } from 'react';
import './InventoryManagement.css';

const InventoryManagement = () => {
  useEffect(() => {
    // Add JSON-LD Schema Markup for Product
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Inventory Management System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based, Windows, Mac, Linux",
      "offers": {
        "@type": "Offer",
        "price": "40.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.bitlyttech.org/inventory-management",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        }
      },
      "description": "Complete inventory management system with stock tracking, order management, supplier management, barcode scanning, and warehouse management. Perfect for retail, wholesale, and manufacturing businesses.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "64",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Stock Management",
        "Order Management",
        "Supplier Management",
        "Barcode Scanning",
        "Warehouse Management",
        "Sales Tracking",
        "Purchase Orders",
        "Stock Alerts",
        "Multi-Location Support",
        "Reports & Analytics"
      ],
      "keywords": "inventory management system, inventory software, stock management, warehouse management, inventory tracking, inventory control, stock control software, inventory management software, barcode inventory system, multi-location inventory"
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
          "name": "What is Inventory Management System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inventory Management System is a comprehensive software solution that helps businesses track stock levels, manage orders, handle suppliers, and optimize warehouse operations efficiently through a single platform."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the Inventory Management System cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Inventory Management System starts at $40 with flexible pricing packages. Choose from Basic, Professional, or Enterprise plans based on your business needs. One-time payment with no subscription."
          }
        },
        {
          "@type": "Question",
          "name": "What features are included in the inventory software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our inventory software includes stock management, order processing, supplier management, barcode scanning, warehouse management, sales tracking, purchase orders, stock alerts, multi-location support, and comprehensive reports."
          }
        },
        {
          "@type": "Question",
          "name": "Does the system support barcode scanning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our inventory management system includes integrated barcode scanning support. You can use barcode scanners for fast product lookup, accurate stock updates, and efficient order processing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage multiple warehouse locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our inventory software supports multi-location management, allowing you to track stock across multiple warehouses, stores, or locations from a single dashboard with real-time sync."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'Inventory Management System - Best Inventory Software | Stock Management $40';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Complete inventory management system with stock tracking, order management, supplier management, barcode scanning & warehouse management. Best inventory software for businesses. Starting at $40.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'inventory management system, inventory software, stock management, warehouse management, inventory tracking, inventory control, stock control software, inventory management software, barcode inventory system, multi-location inventory');

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
      title: "Stock Management",
      description: "Real-time stock tracking with quantity management, reorder points, and automated alerts."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="3" y1="6" x2="21" y2="6" stroke="#00D4FF" strokeWidth="2"/>
          <path d="M16 10a4 4 0 0 1-8 0" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Order Management",
      description: "Complete order processing from creation to delivery with status tracking."
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
      description: "Supplier database with purchase orders, delivery tracking, and payment management."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3h5l5 5 5-5h5v5l-5 5 5 5v5h-5l-5-5-5 5H3v-5l5-5-5-5V3z" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Barcode Scanning",
      description: "Integrated barcode scanner for fast product lookup and accurate stock updates."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="9 22 9 12 15 12 15 22" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Warehouse Management",
      description: "Complete warehouse operations with location tracking and space optimization."
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
      description: "Comprehensive reports on sales, inventory turnover, and performance metrics."
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: 40,
      originalPrice: 80,
      features: [
        "Single Location",
        "Up to 500 Products",
        "Basic Stock Tracking",
        "Order Management",
        "Supplier Management",
        "Basic Reports",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 80,
      originalPrice: 160,
      features: [
        "Up to 5 Locations",
        "Up to 5,000 Products",
        "Advanced Stock Tracking",
        "Barcode Scanning",
        "Warehouse Management",
        "Advanced Analytics",
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
        "Unlimited Locations",
        "Unlimited Products",
        "Complete Stock Management",
        "Multi-Warehouse Support",
        "Custom Integrations",
        "Advanced Analytics",
        "24/7 Support",
        "White Label Option"
      ],
      popular: false
    }
  ];

  const handleWhatsAppPurchase = (packageName, price) => {
    const message = `Hi! I'm interested in buying the ${packageName} package of Inventory Management System for $${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="inventory-management-page">
      
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Inventory Management System - Complete Stock Management</h1>
            <p className="product-hero-subtitle">
              Comprehensive inventory management system with stock tracking, order management, supplier management, barcode scanning, and warehouse management. The best inventory software for retail, wholesale, and manufacturing businesses. Starting at $40.
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
          <h2 className="section-title">Complete Inventory Management Features</h2>
          <p className="section-subtitle">Our inventory software includes all essential modules for efficient stock and warehouse management</p>
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
          <p className="section-subtitle">Flexible pricing plans to suit businesses of all sizes</p>
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
          <h2 className="section-title">How Our Inventory Management System Works</h2>
          <p className="section-subtitle">Transform your inventory operations in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Setup Your Inventory</h3>
              <p className="step-description">Configure products, categories, and initial stock levels</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Add Suppliers</h3>
              <p className="step-description">Import supplier data and set up purchase order workflows</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Start Tracking</h3>
              <p className="step-description">Begin tracking stock movements, orders, and sales</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Optimize Operations</h3>
              <p className="step-description">Use analytics to improve inventory turnover and reduce costs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-faq">
        <div className="product-container">
          <h2 className="section-title">Frequently Asked Questions About Inventory Management System</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is Inventory Management System?</h3>
              <p className="faq-answer">Inventory Management System is a comprehensive software solution that helps businesses track stock levels, manage orders, handle suppliers, and optimize warehouse operations efficiently through a single platform. It's the best inventory software for modern business management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much does the Inventory Management System cost?</h3>
              <p className="faq-answer">Our Inventory Management System starts at $40 with flexible pricing packages. Choose from Basic ($40), Professional ($80), or Enterprise ($150) plans based on your business needs. One-time payment with no subscription fees.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What features are included in the inventory software?</h3>
              <p className="faq-answer">Our inventory software includes stock management, order processing, supplier management, barcode scanning, warehouse management, sales tracking, purchase orders, stock alerts, multi-location support, and comprehensive reports and analytics.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Does the system support barcode scanning?</h3>
              <p className="faq-answer">Yes, our inventory management system includes integrated barcode scanning support. You can use barcode scanners for fast product lookup, accurate stock updates, and efficient order processing. Compatible with most barcode scanners.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I manage multiple warehouse locations?</h3>
              <p className="faq-answer">Absolutely! Our inventory software supports multi-location management, allowing you to track stock across multiple warehouses, stores, or locations from a single dashboard with real-time synchronization and transfer management.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is this suitable for retail businesses?</h3>
              <p className="faq-answer">Yes, our inventory management system is perfect for retail, wholesale, manufacturing, and distribution businesses. The flexible design allows customization based on your specific industry requirements and business size.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryManagement;

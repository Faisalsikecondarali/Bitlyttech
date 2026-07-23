import React, { useEffect } from 'react';
import './GoogleMapsLeads.css';

const GoogleMapsLeads = () => {
  useEffect(() => {
    // Add JSON-LD Schema Markup for Product
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Google Maps Leads Extractor",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Chrome, Firefox, Edge",
      "offers": {
        "@type": "Offer",
        "price": "5.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.bitlyttech.org/google-maps-leads",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        }
      },
      "description": "Extract business leads from Google Maps including names, addresses, phone numbers, emails, and website links. Perfect for sales teams, marketers, and business development professionals.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Extract business names from Google Maps",
        "Get complete address information",
        "Extract phone numbers for outreach",
        "Collect email addresses",
        "Extract website URLs",
        "Export to CSV/Excel format"
      ],
      "keywords": "google maps leads extractor, leads extraction tool, business leads scraper, google maps scraper, lead generation software, contact extractor, email scraper, phone number extractor, business data extraction, local business leads, leads extension, google map leads extension, chrome extension leads, business contact extractor"
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
          "name": "What is Google Maps Leads Extractor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Maps Leads Extractor is a powerful browser extension that helps you extract business contact information from Google Maps listings including business names, addresses, phone numbers, emails, and website URLs."
          }
        },
        {
          "@type": "Question",
          "name": "How does the leads extractor extension work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply install the Chrome extension, search for businesses on Google Maps, and click the extract button. The tool will automatically gather all available contact information and export it to CSV or Excel format."
          }
        },
        {
          "@type": "Question",
          "name": "What data can I extract from Google Maps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can extract business names, complete addresses, phone numbers, email addresses, website URLs, and other contact details from Google Maps business listings."
          }
        },
        {
          "@type": "Question",
          "name": "Is Google Maps Leads Extractor legal to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, extracting publicly available business information from Google Maps is legal for legitimate business purposes such as sales outreach and market research. Always comply with local data protection laws."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the Google Maps scraper cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Google Maps Leads Extractor starts at $5 with flexible pricing packages. Choose from Basic, Professional, or Enterprise plans based on your lead generation needs. One-time payment with no subscription."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'Google Maps Leads Extractor - Best Lead Generation Tool | Extract Business Contacts $5';
    
    // Add or update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Extract unlimited business leads from Google Maps with our powerful leads extractor tool. Get business names, addresses, phone numbers, emails & website URLs. Best Google Maps scraper for sales teams & marketers. Only $5 limited offer.');

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'google maps leads extractor, leads extraction tool, business leads scraper, google maps scraper, lead generation software, contact extractor, email scraper, phone number extractor, business data extraction, local business leads, leads extension, google map leads extension, chrome extension leads, business contact extractor, B2B lead generation');

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Extract Business Names",
      description: "Get accurate business names from Google Maps listings instantly."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 5h18M3 9h18M3 13h18M3 17h18" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Extract Addresses",
      description: "Capture complete address information including street, city, and postal codes."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Extract Phone Numbers",
      description: "Get contact phone numbers for direct business outreach."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#00D4FF" strokeWidth="2"/>
          <polyline points="22,6 12,13 2,6" stroke="#00D4FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Extract Emails",
      description: "Collect email addresses for email marketing campaigns."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Extract Website Links",
      description: "Get website URLs to visit business sites and gather more information."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="7 10 12 15 17 10" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="15" x2="12" y2="3" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Export to CSV/Excel",
      description: "Download extracted data in CSV or Excel format for easy use."
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: 5,
      originalPrice: 10,
      features: [
        "Up to 1,000 Leads/month",
        "Basic Data Extraction",
        "Export to CSV",
        "Chrome Extension",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 15,
      originalPrice: 30,
      features: [
        "Up to 10,000 Leads/month",
        "Advanced Data Extraction",
        "Export to CSV/Excel",
        "Multi-Browser Support",
        "Priority Support",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 30,
      originalPrice: 60,
      features: [
        "Unlimited Leads",
        "Complete Data Extraction",
        "Export to Multiple Formats",
        "Custom Integrations",
        "24/7 Support",
        "White Label Option"
      ],
      popular: false
    }
  ];

  const handleWhatsAppPurchase = (packageName, price) => {
    const message = `Hi! I'm interested in buying the ${packageName} package of Google Maps Leads Extractor for $${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="google-maps-leads-page">
      
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">Google Maps Leads Extractor - Best Lead Generation Tool</h1>
            <p className="product-hero-subtitle">
              Extract unlimited business leads from Google Maps with our powerful leads extractor extension. Get business names, addresses, phone numbers, emails & website URLs. The best Google Maps scraper for sales teams, marketers, and B2B lead generation.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary purchase-btn" onClick={() => handleWhatsAppPurchase('Basic', 5)}>
                Get Started - From $5
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Learn More
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
          <h2 className="section-title">What Data Can You Extract with Our Google Maps Scraper?</h2>
          <p className="section-subtitle">Our leads extraction tool extracts comprehensive business contact information from Google Maps listings</p>
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
          <p className="section-subtitle">Flexible pricing plans to suit your lead generation needs</p>
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
          <h2 className="section-title">How Our Google Maps Leads Extension Works</h2>
          <p className="section-subtitle">Extract business contacts in 4 simple steps with our lead generation software</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Install the Leads Extension</h3>
              <p className="step-description">Add our Google Maps scraper extension to your Chrome browser in seconds</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Search Google Maps</h3>
              <p className="step-description">Search for businesses, restaurants, or services in your target location</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Click Extract Button</h3>
              <p className="step-description">Our leads extraction tool automatically gathers all available contact information</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Export Your Data</h3>
              <p className="step-description">Download extracted leads in CSV or Excel format for your sales team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-faq">
        <div className="product-container">
          <h2 className="section-title">Frequently Asked Questions About Google Maps Leads Extractor</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is Google Maps Leads Extractor?</h3>
              <p className="faq-answer">Google Maps Leads Extractor is a powerful browser extension that helps you extract business contact information from Google Maps listings including business names, addresses, phone numbers, emails, and website URLs. It's the best tool for B2B lead generation and sales outreach.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does the leads extractor extension work?</h3>
              <p className="faq-answer">Simply install the Chrome extension, search for businesses on Google Maps, and click the extract button. The tool will automatically gather all available contact information and export it to CSV or Excel format for your marketing campaigns.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What data can I extract from Google Maps?</h3>
              <p className="faq-answer">You can extract business names, complete addresses, phone numbers, email addresses, website URLs, and other contact details from Google Maps business listings. Our Google Maps scraper captures all publicly available information.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is Google Maps Leads Extractor legal to use?</h3>
              <p className="faq-answer">Yes, extracting publicly available business information from Google Maps is legal for legitimate business purposes such as sales outreach and market research. Always comply with local data protection laws and GDPR regulations when using our leads extraction tool.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much does the Google Maps scraper cost?</h3>
              <p className="faq-answer">Our Google Maps Leads Extractor starts at $5 with flexible pricing packages. Choose from Basic ($5), Professional ($15), or Enterprise ($30) plans based on your lead generation needs. One-time payment with no subscription fees.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I use this for B2B lead generation?</h3>
              <p className="faq-answer">Absolutely! Our Google Maps leads extension is specifically designed for B2B lead generation. Extract contact information from local businesses, restaurants, service providers, and any other Google Maps listings to build your sales pipeline.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleMapsLeads;

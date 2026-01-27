import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = ({ setCurrentPage, currentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Format message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Company:* ${formData.company}\n` +
        `*Service:* ${formData.service}\n\n` +
        `*Message:*\n${formData.message}`
      );

      // Company WhatsApp number (replace with your actual number)
      const companyWhatsApp = '+923077902356';
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${companyWhatsApp.replace('+', '')}?text=${whatsappMessage}`;
      
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
          setSubmitStatus('');
        }, 2000);
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Backend Development',
    'Browser Extensions',
    'IT Consulting'
  ];

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 5h2M3 10h2M3 15h18M3 20h2" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Office Address",
      details: "This Company Based On Remote"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 5l2 2m0 4l2 2m-2-2l-2 2m0 4l2 2M5 19a2 2 0 0 1-2h0a2 2 0 0 1 2v-14a2 2 0 0 1-2h0a2 2 0 0 1 2z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Phone Number",
      details: "+923077902356"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2h-16c-1.1 0-2-.9-2v12c0 1.1.9 2h16c1.1 0 2-.9 2v-12z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6l-4 4v6l4-4z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Email Address",
      details: "bitlyttech@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.5 2 5.5 5.5h11c3.3 0 6 2.7 6v8c0 3.3-2.7 6H5.5c-3.3 0-6 2.7-6V8c0-3.3 2.7-6h11c3.3 0 6 2.7 6V8c0 3.3-2.7 6-5.5c-3.3 0-6 2.7-6z" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="contact-page">
      
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle white-text">
              Ready to start your next project? We're here to help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2 className="section-title white-text">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending via WhatsApp...
                    </>
                  ) : (
                    <>
                      Send via WhatsApp
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.5 2.75L12.25 7L7.5 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✓ Message sent successfully! Opening WhatsApp...
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ✗ Error sending message. Please try again.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="section-title white-text">Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div className="contact-info-card" key={index}>
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">{info.title}</h3>
                      <p className="info-details">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-section">
                <h3 className="whatsapp-title">Need Quick Help?</h3>
                <p className="whatsapp-subtitle">Chat with us directly on WhatsApp</p>
                <a 
                  href="https://wa.me/923077902356" 
                  target="_blank"
                  className="whatsapp-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.472 14.382c-.297-.09-.632-.278-.698-.461-.125-.69-.125-.19v-.848c0-.431.288-.475.698-.19.698.19.525.025.865.025.865v3.979c0 .533.425.88.525.88h5.525c.425 0 .88-.352.88-.88v3.979c0 .533-.425.88-.525.88h-5.525c-.425 0-.88.352-.88v-3.979c0-.533.425-.88.525-.88h-5.525c-.425 0-.88-.352-.88v-3.875c0-.533.425-.88-.525-.88h3.979c.425 0 .88.352.88.88v3.875c0 .533-.425.88-.525.88z" fill="#25D366"/>
                    <path d="M12.038 20.525c.865 0 1.255-.416 1.255-.916v-2.965c0-.5-.416-.916-.916h-2.965c-.5 0-.916.416-.916v2.965c0 .5.416.916.916h2.965c.5 0 .916-.416.916v-2.965c0-.865-.352-1.255-.352-1.255z" fill="#25D366"/>
                  </svg>
                  Chat on WhatsApp
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.25 2.75L9.75 7L5.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

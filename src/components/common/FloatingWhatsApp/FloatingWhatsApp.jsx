import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = '+923077902356'; // Your WhatsApp number
  const message = 'Hello! I have a question about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="floating-whatsapp"
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
    >
      <img 
        src="/whatsapp-svgrepo-com.svg" 
        alt="WhatsApp" 
        width="40" 
        height="40"
      />
    </a>
  );
};

export default FloatingWhatsApp;

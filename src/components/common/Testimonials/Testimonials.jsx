import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abdul Majid",
      role: "CEO, Bulk Byte.",
      content: "Bitlyt Tech Solutions transformed our business with their innovative approach and exceptional technical expertise. Highly recommended!",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Abdul+Majid&background=00D4FF&color=fff&size=60"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager, InnovateCo",
      content: "The team delivered beyond our expectations. Their attention to detail and creative solutions made all the difference.",
      rating: 4.9,
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0099CC&color=fff&size=60"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO, DigitalFlow",
      content: "Outstanding service from start to finish. They understood our vision and brought it to life perfectly.",
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

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear what our satisfied clients have to say about working with us.
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
  );
};

export default Testimonials;

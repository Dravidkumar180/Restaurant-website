// Service.jsx
import React from 'react';
import './service.css';

const Service = () => {
  const testimonials = [
    {
      text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt donec id vel.",
      author: "Emma Odinson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      role: "Food Critic"
    },
    {
      text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt donec id vel.",
      author: "Dian Annakin",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      role: "Chef"
    },
    {
      text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt donec id vel.",
      author: "Kyle Smith",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      role: "Food Blogger"
    },
    {
      text: "Rhoncus risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt donec id vel.",
      author: "Jean D. Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      role: "Restaurant Owner"
    }
  ];

  return (
    <div className="service-container">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">What They Say About Us</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="rating-container">
            <span className="rating-score">4.8/5</span>
            <span className="rating-label">Customer's Rating</span>
            <div className="stars">
              ★★★★★
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <h2 className="section-subtitle">Our Happy Customers</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="testimonial-image"
                  loading="lazy"
                />
                <div className="quote-icon">"</div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <h4 className="testimonial-author">{testimonial.author}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Section with Background Image */}
      <section className="reservation-section">
        <div className="reservation-overlay"></div>
        <div className="reservation-content">
          <div className="reservation-icon">🍽️</div>
          <h2 className="reservation-title">Reservation</h2>
          <p className="reservation-description">
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. 
            Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.
          </p>
          <button className="book-button">
            <span>BOOK A TABLE NOW</span>
            <svg className="button-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
            </svg>
          </button>
          <div className="telephone-reservation">
            <div className="phone-icon-wrapper">
              <svg className="phone-icon" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="telephone-info">
              <p className="telephone-label">Telephone Reservations</p>
              <p className="telephone-number">+12 34 56 7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
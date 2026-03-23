import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            Massa praesent sit suspendisse ac volutpat amet.
            <br />
            Commodo elit at non neque ullamcorper id.
          </p>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="location-section">
        <div className="container">
          <div className="location-wrapper">
            <div className="location-image">
              <img 
               src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800" 
               alt="Modern restaurant interior with wooden tables"
               className="restaurant-img"
              />
            </div>
            <div className="location-content">
              <span className="section-tag">OUR LOCATION</span>
              <h2>
                3 E 19th St, 123 Fifth Avenue,
                <br />
                NY 10160, New York, USA
              </h2>
              <p>
                Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
                Bibendum tincidunt a scelerisque consectetur ultrices elementum
                pulvinar non.
              </p>
              <button className="btn book-btn">BOOK A TABLE NOW</button>

              <div className="reservation-details">
                <p className="reservation-label">Telephone Reservations</p>
                <h3>12 34 56 7890</h3>
                <p className="email-link">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-form-section">
        <div className="container contact-grid">
          <div className="contact-left">
            <h2>Send Us a Message</h2>
            <p className="form-description">
              Massa praesent sit suspendisse ac volutpat amet. Commodo elit at
              non neque ullamcorper id.
            </p>

            <form className="contact-form" action="#" method="POST">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Active Email *" 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message Here" 
                  rows="5"
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="contact-right">
            <div className="image-gallery">
              <img 
                src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Delicious gourmet dish"
                className="gallery-img main-img"
              />
              <div className="gallery-overlay">
                <span className="overlay-text">Fine Dining Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL GALLERY SECTION - Restaurant Ambiance */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <span className="section-tag">OUR ATMOSPHERE</span>
            <h2>Experience the Ambiance</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Elegant dining setup"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chef preparing signature dish"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Wine selection"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Background and image URLs
  const heroBg = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const menuBg = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const reservationBg = "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1600";
  
  // Featured dishes
  const featuredDishes = [
    {
      id: 1,
      name: "Lemon and Garlic Green Beans",
      price: 15.00,
      ingredients: "Lemon / Garlic / Beans",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Popular",
      angle: "rotate(2deg)"
    },
    {
      id: 2,
      name: "Bacon-wrapped Shrimp with Garlic",
      price: 21.50,
      ingredients: "Bacon / Shrimp / Garlic",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Chef's Special",
      angle: "rotate(-1deg)"
    },
    {
      id: 3,
      name: "Lamb-beef Kofka Skewers",
      price: 18.50,
      ingredients: "Lamb / Wine / Butter",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Signature",
      angle: "rotate(1.5deg)"
    },
    {
      id: 4,
      name: "Imported Oysters Grill",
      price: 20.00,
      ingredients: "Oysters / Veggie / Ginger",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Fresh Catch",
      angle: "rotate(-0.5deg)"
    }
  ];

  // Gallery images with different angles
  const galleryImages = [
    { id: 1, url: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(2deg)", translateY: "-5px" },
    { id: 2, url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(-3deg)", translateY: "10px" },
    { id: 3, url: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(1deg)", translateY: "0px" },
    { id: 4, url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(-2deg)", translateY: "-10px" },
    { id: 5, url: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(3deg)", translateY: "5px" },
    { id: 6, url: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800", angle: "rotate(-1deg)", translateY: "-8px" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge animate-slideDown">
              <span className="badge-text">GOODPLACE.GOODFOOD</span>
            </div>
            <h1 className="hero-title animate-slideUp">
              A Really Good<br />
              <span className="highlight">Place to Eat</span>
            </h1>
            <div className="hero-location animate-slideUp">
              <span className="location-icon">📍</span>
              <span className="location-text">In the City of New York</span>
            </div>
            <p className="hero-description animate-slideUp">
              Massa praesent sit suspendisse ac volutpat amet. Commodo elit<br />
              at non neque ullamcorper id.
            </p>
            <div className="hero-actions animate-slideUp">
              <button className="btn btn-primary" onClick={() => navigate('/menu')}>
                View Menu
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
            <div className="scroll-indicator animate-fadeIn">
              <span className="scroll-text">SCROLL DOWN</span>
              <div className="scroll-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Menu Section */}
      <div className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Menu</h2>
            <p className="section-subtitle">Get Relax. Eat.</p>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <span className="decoration-icon">🍽️</span>
              <span className="decoration-line"></span>
            </div>
            <p className="section-description">
              Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. 
              Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.
            </p>
          </div>

          <div className="featured-grid">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="dish-card" style={{ transform: dish.angle }}>
                <div className="dish-badge">{dish.badge}</div>
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  <div className="dish-overlay"></div>
                </div>
                <div className="dish-info">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-ingredients">{dish.ingredients}</p>
                  <div className="dish-footer">
                    <span className="dish-price">${dish.price.toFixed(2)}</span>
                    <button className="dish-order" onClick={() => navigate('/menu')}>
                      Order Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-container">
            <button className="btn-view-all" onClick={() => navigate('/menu')}>
              VIEW ALL MENU
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section with Angled Images */}
      <div className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visual Feast</h2>
            <p className="section-subtitle">A Journey Through Flavors</p>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <span className="decoration-icon">📸</span>
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img) => (
              <div 
                key={img.id} 
                className="gallery-item" 
                style={{ 
                  transform: `${img.angle} translateY(${img.translateY})`,
                  animationDelay: `${img.id * 0.1}s`
                }}
              >
                <img src={img.url} alt={`Gallery ${img.id}`} />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Combined Reservation & Newsletter Section */}
      <div className="reservation-section" style={{ backgroundImage: `url(${reservationBg})` }}>
        <div className="reservation-overlay">
          <div className="container">
            <div className="reservation-content">
              <h2 className="reservation-title">Reservation</h2>
              <p className="reservation-description">
                Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a<br />
                scel suscipit bibendus.
              </p>
              
              <div className="reservation-newsletter-wrapper">
                <div className="reservation-left">
                  <button className="btn btn-reservation" onClick={() => navigate('/contact')}>
                    BOOK A TABLE NOW
                  </button>
                  <div className="telephone-info">
                    <span className="telephone-icon">📞</span>
                    <div className="telephone-details">
                      <span className="telephone-label">TELEPHONE RESERVATIONS</span>
                      <span className="telephone-number">12 34 56 7890</span>
                    </div>
                  </div>
                </div>

                <div className="newsletter-right">
                  <h3>Get the latest updates and special offers</h3>
                  <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email address" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
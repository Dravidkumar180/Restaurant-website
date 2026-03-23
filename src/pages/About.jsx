// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  // Background images
  const heroBg = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const storyImg = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const decorImg = "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const cozyImg = "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const relaxImg = "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1600";
  const kitchenImg = "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const chefs = [
    {
      id: 1,
      name: "Tony Gordon",
      title: "Executive Chef & Founder",
      experience: "25+ years of culinary excellence",
      specialty: "French & Mediterranean Cuisine",
      awards: "3 Michelin Stars, James Beard Award",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Cooking is an art, and every plate is my canvas.",
      signature: "Coq au Vin, Bouillabaisse",
      instagram: "@cheftonygordon",
      rating: "👑 👑 👑"
    },
    {
      id: 2,
      name: "Mike Tomskin",
      title: "Pastry Chef & Co-founder",
      experience: "18+ years in patisserie",
      specialty: "Artisanal Desserts & Chocolate",
      awards: "Pastry Chef of the Year 2022, Gold Medal Paris",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Sweetness is the language of love in our kitchen.",
      signature: "Signature Chocolate Lava, Crème Brûlée",
      instagram: "@miketomskinpastry",
      rating: "👑 👑"
    },
    {
      id: 3,
      name: "Edward Solo",
      title: "Sous Chef & Grill Master",
      experience: "15+ years of grilling expertise",
      specialty: "Steak & Seafood",
      awards: "Grill Master Championship 2023, Best Steakhouse Award",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Fire, smoke, and passion create perfection.",
      signature: "Beef Tenderloin, Grilled Oysters",
      instagram: "@edwardsolochef",
      rating: "👑 👑"
    }
  ];

  const features = [
    {
      icon: "🎨",
      title: "Hand-crafted Decor",
      description: "In total 650m² mix of styles and colors, creating a unique dining experience.",
      image: decorImg
    },
    {
      icon: "🏠",
      title: "Cozy Place",
      description: "Feel at home and find your atmosphere with warm lighting and comfortable seating.",
      image: cozyImg
    },
    {
      icon: "🌿",
      title: "Relax Atmosphere",
      description: "Take refuge in our greenery and away from the crowds. A peaceful escape.",
      image: relaxImg
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Chefs" },
    { number: "200+", label: "Delicious Dishes" },
    { number: "10K+", label: "Happy Customers" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-description">
            Massa praesent sit suspendisse ac volutpat amet.
            <br />Commodo elit at non neque ullamcorper id.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <div className="story-description">
                <p className="lead">
                  Mattis nisi, ultricies nunc pellentesque pulvinar malesuada habitant in. 
                  Sed sagittis lectus ut euismod.
                </p>
                <p>
                  Mauris, dui viverra a tincidunt tellus tempus amet. Posuere massa at ornare 
                  nulla facilisi. Dignissim volutpat velit ut dignissim aliquet nisl, pretium, 
                  viverra bibendum.
                </p>
                <p>
                  Consequat facilisi ultricies integer eu nibh pellentesque. Morbi ac sit ultrices 
                  quis dignissim lectus. Pellentesque nisl, ac, bibendum arcu vestibulum aliquam.
                </p>
              </div>
              
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-image">
              <img src={storyImg} alt="Our Restaurant" />
              <div className="experience-badge">
                <span className="years">25+</span>
                <span className="text">Years of<br />Culinary Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chef's Philosophy */}
      <div className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-image">
              <img src={kitchenImg} alt="Kitchen Philosophy" />
              <div className="quote-overlay">
                <p>"Every dish tells a story, and we're here to write the most delicious chapters."</p>
              </div>
            </div>
            <div className="philosophy-text">
              <h2>Our Culinary Philosophy</h2>
              <p>We believe that great food starts with the finest ingredients. Our chefs travel the world to source the freshest produce, ensuring every dish reflects our commitment to quality and sustainability.</p>
              <div className="values">
                <div className="value-item">
                  <span>🌱</span>
                  <strong>Sustainable Sourcing</strong>
                  <p>100% locally sourced when possible</p>
                </div>
                <div className="value-item">
                  <span>🍽️</span>
                  <strong>From Scratch</strong>
                  <p>Everything made in-house daily</p>
                </div>
                <div className="value-item">
                  <span>🎨</span>
                  <strong>Artistic Presentation</strong>
                  <p>Each plate is a masterpiece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chef's Team Section */}
      <div className="chefs-section">
        <div className="container">
          <h2 className="section-title">Meet Our Master Chefs</h2>
          <p className="section-subtitle">The talented team behind your unforgettable dining experience</p>
          
          <div className="chefs-grid">
            {chefs.map((chef) => (
              <div key={chef.id} className="chef-card">
                <div className="chef-image">
                  <img src={chef.image} alt={chef.name} />
                  <div className="chef-rating">{chef.rating}</div>
                </div>
                <div className="chef-info">
                  <h3>{chef.name}</h3>
                  <p className="chef-title">{chef.title}</p>
                  <div className="chef-details">
                    <div className="detail-item">
                      <span>🏆</span>
                      <span>{chef.experience}</span>
                    </div>
                    <div className="detail-item">
                      <span>🍳</span>
                      <span>{chef.specialty}</span>
                    </div>
                    <div className="detail-item">
                      <span>⭐</span>
                      <span>{chef.awards}</span>
                    </div>
                  </div>
                  <div className="chef-quote">
                    <p>"{chef.quote}"</p>
                  </div>
                  <div className="chef-signature">
                    <strong>Signature Dish:</strong> {chef.signature}
                  </div>
                  <div className="chef-social">
                    <span>📷 {chef.instagram}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <h2>Experience the Magic of Our Kitchen</h2>
          <p>Book your table today and let us take you on a culinary journey</p>
          <button className="cta-button">Make a Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default About;
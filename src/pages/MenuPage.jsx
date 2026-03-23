// MenuPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState({});

  // Using placeholder image URLs instead of local imports
  const heroBgImg = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const appetizerImg = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const mainCourseImg = "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const dessertImg = "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const juiceImg = "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1600";

  // Menu data structure with all sections including juice
  const menuSections = [
    {
      id: 'appetizer',
      title: 'Appetizer',
      description: 'Lorem sollicitudin quis amet, pellentesque et proin. Venenatis iaculis nibh neque sit ullamcorper ac dictumst. Amet dignissim nunc gravida eu vestibulum elit. In lorem ornare sollicitudin aliquet nunc cum massa.',
      image: appetizerImg,
      items: [
        { id: 1, name: 'Lemon And Garlic Green Beans', price: 15.00, ingredients: 'Lemon / Garlic / Beans', category: 'appetizer' },
        { id: 2, name: 'Bacon-wrapped Shrimp With Garlic', price: 21.50, ingredients: 'Bacon / Shrimp / Garlic', category: 'appetizer' },
        { id: 3, name: 'Lamb-beef Kofka Skewers With Tzatziki', price: 18.50, ingredients: 'Lamb / Wine / Butter', category: 'appetizer' },
        { id: 4, name: 'Imported Oysters Grill (5 Pieces)', price: 20.00, ingredients: 'Oysters / Veggie / Ginger', category: 'appetizer' }
      ]
    },
    {
      id: 'main',
      title: 'Main Courses',
      description: 'Lorem sollicitudin quis amet, pellentesque et proin. Venenatis iaculis nibh neque sit ullamcorper ac dictumst. Amet dignissim nunc gravida eu vestibulum elit. In lorem ornare sollicitudin aliquet nunc cum massa.',
      image: mainCourseImg,
      items: [
        { id: 5, name: 'Grilled Salmon With Herbs', price: 24.50, ingredients: 'Salmon / Herbs / Lemon', category: 'main' },
        { id: 6, name: 'Beef Tenderloin Steak', price: 32.00, ingredients: 'Beef / Rosemary / Butter', category: 'main' },
        { id: 7, name: 'Chicken Marsala', price: 22.50, ingredients: 'Chicken / Mushrooms / Marsala Wine', category: 'main' },
        { id: 8, name: 'Vegetable Risotto', price: 18.00, ingredients: 'Arborio Rice / Vegetables / Parmesan', category: 'main' }
      ]
    },
    {
      id: 'juice',
      title: 'Fresh Juices & Beverages',
      description: 'Refreshing handcrafted juices made from the freshest ingredients to complement your meal.',
      image: juiceImg,
      items: [
        { id: 9, name: 'Orange Sunrise', price: 6.50, ingredients: 'Fresh Oranges / Honey / Mint', category: 'juice' },
        { id: 10, name: 'Green Detox', price: 7.50, ingredients: 'Spinach / Kale / Apple / Ginger', category: 'juice' },
        { id: 11, name: 'Berry Blast', price: 8.00, ingredients: 'Strawberry / Blueberry / Raspberry', category: 'juice' },
        { id: 12, name: 'Tropical Paradise', price: 7.50, ingredients: 'Mango / Pineapple / Coconut Water', category: 'juice' },
        { id: 13, name: 'Watermelon Mint Cooler', price: 6.00, ingredients: 'Watermelon / Mint / Lime', category: 'juice' },
        { id: 14, name: 'Carrot Ginger Zing', price: 6.50, ingredients: 'Carrot / Ginger / Orange', category: 'juice' }
      ]
    },
    {
      id: 'dessert',
      title: 'Dessert',
      description: 'Lorem sollicitudin quis amet, pellentesque et proin. Venenatis iaculis nibh neque sit ullamcorper ac dictumst. Amet dignissim nunc gravida eu vestibulum elit. In lorem ornare sollicitudin aliquet nunc cum massa.',
      image: dessertImg,
      items: [
        { id: 15, name: 'Chocolate Lava Cake', price: 9.00, ingredients: 'Dark Chocolate / Vanilla Ice Cream', category: 'dessert' },
        { id: 16, name: 'Tiramisu Classico', price: 8.50, ingredients: 'Mascarpone / Coffee / Ladyfingers', category: 'dessert' },
        { id: 17, name: 'Cheesecake Berry', price: 7.50, ingredients: 'Cream Cheese / Mixed Berries', category: 'dessert' },
        { id: 18, name: 'Crème Brûlée', price: 8.00, ingredients: 'Vanilla Custard / Caramelized Sugar', category: 'dessert' }
      ]
    }
  ];

  const signatureItems = [
    { id: 'signature', name: 'Strawberry and Grapes Cake', description: 'In lorem ornare sollicitudin aliquet nunc cum massa.', price: 8.00, category: 'signature' }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems({ ...addedItems, [item.id]: true });
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBgImg})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Our Menu</h1>
          <p className="hero-description">
            Massa praesent sit suspendisse ac volutpat amet.
            <br />Commodo elit at non neque ullamcorper id.
          </p>
        </div>
      </div>

      {/* Cart Button */}
      <button className="cart-floating-btn" onClick={() => navigate('/cart')}>
        🛒 View Cart
      </button>

      {/* Menu Sections */}
      {menuSections.map((section, idx) => (
        <section key={section.id} className="menu-section">
          <div className="section-header">
            <div className="section-text">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>
            <div className="section-image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>

          {/* Signature Item - appears only in Appetizer and Main sections */}
          {idx < 2 && (
            <div className="signature-item">
              <span className="signature-badge">Signature</span>
              <h3 className="signature-name">Strawberry and Grapes Cake</h3>
              <p className="signature-desc">In lorem ornare sollicitudin aliquet nunc cum massa.</p>
              <span className="signature-price">8.00</span>
              <button 
                className="add-to-cart-btn signature-add"
                onClick={() => handleAddToCart(signatureItems[0])}
              >
                {addedItems['signature'] ? '✓ Added!' : 'Add to Cart'}
              </button>
            </div>
          )}

          {/* Menu Items Grid */}
          <div className="menu-items-grid">
            {section.items.map((item) => (
              <div key={item.id} className="menu-item-card">
                <div className="menu-item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-ingredients">{item.ingredients}</p>
                </div>
                <div className="item-price-actions">
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <button 
                    className={`add-to-cart-btn ${addedItems[item.id] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(item)}
                  >
                    {addedItems[item.id] ? '✓ Added!' : 'Add'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Divider between sections */}
          {idx < menuSections.length - 1 && <hr className="section-divider" />}
        </section>
      ))}

      {/* Dessert Signature Item */}
      <section className="menu-section dessert-signature-section">
        <div className="signature-item dessert-signature">
          <span className="signature-badge">Signature</span>
          <h3 className="signature-name">Strawberry and Grapes Cake</h3>
          <p className="signature-desc">In lorem ornare sollicitudin aliquet nunc cum massa.</p>
          <span className="signature-price">8.00</span>
          <button 
            className="add-to-cart-btn signature-add"
            onClick={() => handleAddToCart(signatureItems[0])}
          >
            {addedItems['signature'] ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </section>

      {/* Reservation Section */}
      <div className="reservation-section">
        <div className="reservation-container">
          <h2 className="reservation-title">Reservation</h2>
          <p className="reservation-description">
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. 
            Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.
          </p>
          <div className="reservation-buttons">
            <button className="btn btn-primary">BOOK A TABLE NOW</button>
            <div className="telephone-reservations">
              <span className="telephone-label">TELEPHONE RESERVATIONS</span>
              <span className="telephone-number">+12 34 56 7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
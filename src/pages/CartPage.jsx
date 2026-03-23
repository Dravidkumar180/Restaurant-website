// CartPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStep, setPaymentStep] = useState('cart');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Background image URL
  const backgroundImage = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setPaymentStep('confirmation');
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setPaymentStep('cart');
      setPaymentMethod('');
      setOrderPlaced(false);
      alert('🍽️ Your food will be served shortly! Thank you for ordering.');
      navigate('/menu');
    }, 2000);
  };

  const handleContinueShopping = () => {
    navigate('/menu');
  };

  if (cartItems.length === 0 && paymentStep === 'cart') {
    return (
      <div className="cart-page empty-cart" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="empty-cart-overlay">
          <div className="empty-cart-container">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <button className="btn btn-primary" onClick={handleContinueShopping}>
              Browse Our Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="cart-overlay">
        <div className="cart-container">
          {/* Back to Menu Button - Made more prominent */}
          <button className="back-to-menu-btn" onClick={handleContinueShopping}>
            ← Back to Menu
          </button>

          {paymentStep === 'cart' && (
            <>
              <h1 className="cart-title">Your Cart</h1>
              
              <div className="cart-content">
                <div className="cart-items-section">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-category">{item.category}</p>
                        <p className="cart-item-ingredients">{item.ingredients}</p>
                      </div>
                      
                      <div className="cart-item-controls">
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="cart-item-price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-item-btn"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (10%)</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <button 
                    className="btn btn-primary checkout-btn"
                    onClick={() => setPaymentStep('payment')}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </>
          )}

          {paymentStep === 'payment' && (
            <div className="payment-section">
              <button className="back-to-cart-btn" onClick={() => setPaymentStep('cart')}>
                ← Back to Cart
              </button>
              <h2>Payment Method</h2>
              <p className="payment-subtitle">Select your preferred payment method</p>
              
              <div className="payment-options">
                <div 
                  className={`payment-option ${paymentMethod === 'credit' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('credit')}
                >
                  <div className="payment-icon">💳</div>
                  <div className="payment-details">
                    <h4>Credit / Debit Card</h4>
                    <p>Visa, Mastercard, American Express</p>
                  </div>
                  {paymentMethod === 'credit' && <div className="checkmark">✓</div>}
                </div>

                <div 
                  className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className="payment-icon">📱</div>
                  <div className="payment-details">
                    <h4>PayPal</h4>
                    <p>Pay with your PayPal account</p>
                  </div>
                  {paymentMethod === 'paypal' && <div className="checkmark">✓</div>}
                </div>

                <div 
                  className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  <div className="payment-icon">💵</div>
                  <div className="payment-details">
                    <h4>Cash</h4>
                    <p>Pay when your food is served</p>
                  </div>
                  {paymentMethod === 'cash' && <div className="checkmark">✓</div>}
                </div>

                <div 
                  className={`payment-option ${paymentMethod === 'googlepay' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('googlepay')}
                >
                  <div className="payment-icon">📲</div>
                  <div className="payment-details">
                    <h4>Google Pay / Apple Pay</h4>
                    <p>Fast and secure digital payment</p>
                  </div>
                  {paymentMethod === 'googlepay' && <div className="checkmark">✓</div>}
                </div>
              </div>

              <div className="payment-summary">
                <h3>Order Total: ${calculateTotal().toFixed(2)}</h3>
              </div>

              <div className="payment-actions">
                <button className="btn btn-secondary" onClick={() => setPaymentStep('cart')}>
                  Back to Cart
                </button>
                <button className="btn btn-primary" onClick={handlePayment}>
                  Continue to Confirmation
                </button>
              </div>
            </div>
          )}

          {paymentStep === 'confirmation' && (
            <div className="confirmation-section">
              {!orderPlaced ? (
                <>
                  <button className="back-to-payment-btn" onClick={() => setPaymentStep('payment')}>
                    ← Back to Payment
                  </button>
                  <div className="confirmation-icon">✅</div>
                  <h2>Confirm Your Order</h2>
                  <p className="confirmation-message">
                    Please review your order before confirming
                  </p>

                  <div className="order-review">
                    <h3>Order Items</h3>
                    {cartItems.map((item) => (
                      <div key={item.id} className="review-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="review-total">
                      <strong>Total Amount:</strong>
                      <strong>${calculateTotal().toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="payment-method-confirm">
                    <strong>Payment Method:</strong>
                    <span>
                      {paymentMethod === 'credit' && 'Credit/Debit Card'}
                      {paymentMethod === 'paypal' && 'PayPal'}
                      {paymentMethod === 'cash' && 'Cash'}
                      {paymentMethod === 'googlepay' && 'Google Pay/Apple Pay'}
                    </span>
                  </div>

                  <div className="confirmation-actions">
                    <button className="btn btn-secondary" onClick={() => setPaymentStep('payment')}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={handleConfirmOrder}>
                      Confirm Order
                    </button>
                  </div>
                </>
              ) : (
                <div className="order-placed">
                  <div className="serving-animation">🍽️</div>
                  <h2>Order Confirmed!</h2>
                  <p>Your food is being prepared and will be served shortly.</p>
                  <div className="estimated-time">
                    <span>⏰ Estimated serving time: 15-20 minutes</span>
                  </div>
                  <button className="btn btn-primary" onClick={handleContinueShopping}>
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
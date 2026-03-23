import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  // 🔥 Dynamic opening hours logic
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();

  const isOpen =
    (day >= 0 && day <= 3 && hour >= 9 && hour < 22) || // Sun-Wed
    (day >= 4 && day <= 6 && hour >= 9 && hour < 24);   // Thu-Sat

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="logo">● DRAVZ'S</h2>
          <p>
            Egestas sit in lobortis duis viverra enim eros ornare. Et tincidunt
            pretium curabitur vehicula turpis adipiscing donec.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* LOCATION */}
        <div className="footer-col">
          <h3>Our Location</h3>
          <p>
            3 E 19th St, 123 Fifth Avenue,
            <br />
            NY 10160, New York, USA
            <br />
            1 234 567 890
          </p>

          <p className="direction">
            <FaMapMarkerAlt /> Get Direction
          </p>
        </div>

        {/* LINKS (React Router) */}
        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* HOURS */}
        <div className="footer-col">
          <h3>Opening Hours</h3>

          <p className="hours">
            <FaClock /> Sunday to Wednesday
            <br />
            <span>9AM - 10:30PM</span>
          </p>

          <p className="hours">
            <FaClock /> Thursday, Friday, Saturday
            <br />
            <span>9AM - 12:30AM</span>
          </p>

          {/* 🔥 Dynamic status */}
          <p className={`status ${isOpen ? "open" : "closed"}`}>
            {isOpen ? "🟢 Open Now" : "🔴 Closed"}
          </p>

          <button className="reserve-btn">RESERVATION</button>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>Copyright © 2026 Dravz's Restaurant</p>
        <p>Powered by Dravz's Restaurant</p>
      </div>
    </footer>
  );
};

export default Footer;
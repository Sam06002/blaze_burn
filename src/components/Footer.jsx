import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Blaze Burn</h2>
            <p>Where Tradition Meets Trend</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Blaze Burn. All rights reserved.</p>
          <p>Designed with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* Left Column: Branding */}
        <div className="footer-brand-section">
          <div className="footer-logo-group">
            <img src="/blazeburn-icon.svg" alt="Blazeburn" className="footer-icon" />
            <div className="footer-brand-text">
              <h3>Blazeburn</h3>
              <span>DELICIOUSLY CRAFTED</span>
            </div>
          </div>
          <a href="https://blazeburn.in" className="footer-link">blazeburn.in</a>
        </div>

        {/* Center Column: Contact */}
        <div className="footer-contact-section">
          <h4>Contact Us</h4>
          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-emoji">📍</span>
              <span>Coming Soon in Ahmedabad</span>
            </div>
            <div className="contact-row">
              <span className="contact-emoji">📞</span>
              <a href="tel:+917328028036">+91 7328028036</a>
            </div>
            <div className="contact-row">
              <span className="contact-emoji">✉️</span>
              <a href="mailto:contact@blazeburn.in">contact@blazeburn.in</a>
            </div>
          </div>
        </div>

        {/* Right Column: Social */}
        <div className="footer-social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/blazeburn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span>📘</span>
            </a>
            <a href="https://instagram.com/blazeburn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="https://twitter.com/blazeburn" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span>🐦</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© {year} Blazeburn. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">A Culinary Journey Like No Other</h2>
            <p className="about-text">
              Welcome to <strong>Blaze Burn</strong>, Ahmedabad's premier all-vegetarian, 
              multi-themed food destination where authentic flavors meet contemporary innovation.
            </p>
            <p className="about-text">
              We offer an unparalleled dining experience that celebrates India's rich 
              culinary heritage while embracing modern gastronomy.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <h3>100% Vegetarian</h3>
                <p>Pure, authentic vegetarian cuisine crafted with premium ingredients</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3>Multi-Themed</h3>
                <p>Experience diverse ambiances and flavors under one roof</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <h3>Premium Experience</h3>
                <p>Affordable luxury with exceptional service and ambiance</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🍽️</div>
                <h3>900+ Dishes</h3>
                <p>Extensive menu spanning 6 cuisines with something for everyone</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-card">
              <img src="/images/restaurant_about_interior_1770051246364.png" alt="Blaze Burn Restaurant Interior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

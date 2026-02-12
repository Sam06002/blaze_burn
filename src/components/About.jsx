import { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate parallax offset based on element position in viewport
          const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
          const yPos = scrollPercent * 100 * speed;
          el.style.transform = `translateY(${yPos}px)`;
        }
      });
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          {/* Hero Section with Overlapping Title and Image Collage */}
          <div className="about-hero">
            <h1 className="about-hero-title">
              A Culinary Journey<br />
              Like No Other
            </h1>
            <div className="about-collage">
              <div className="collage-image collage-large" data-parallax="0.5">
                <img src="/images/about/hero/hero-1.png" alt="Premium Dining Area" />
              </div>
              <div className="collage-image collage-medium" data-parallax="0.8">
                <img src="/images/about/hero/hero-2.png" alt="Exquisite Cuisine" />
              </div>
            </div>
          </div>

          {/* Z-Pattern Content: Left Text, Right Image */}
          <div className="about-content">
            <div className="content-row row-left">
              <div className="content-text">
                <h2 className="content-heading">Welcome to Blaze Burn</h2>
                <p className="content-description">
                  Ahmedabad's premier all-vegetarian, multi-themed food destination where 
                  authentic flavors meet contemporary innovation. We celebrate India's rich 
                  culinary heritage while embracing modern gastronomy.
                </p>
              </div>
              <div className="content-image" data-parallax="0.3">
                <img src="/images/restaurant_about_interior_1770051246364.png" alt="Restaurant Interior" />
              </div>
            </div>

            {/* Z-Pattern Content: Right Text, Left Image */}
            <div className="content-row row-right">
              <div className="content-image" data-parallax="0.3">
                <img src="/images/cultural_dining_traditional_1770052121327.png" alt="Dining Experience" />
              </div>
              <div className="content-text">
                <h2 className="content-heading">Unparalleled Experience</h2>
                <p className="content-description">
                  We offer an extraordinary dining experience that celebrates tradition 
                  while pushing culinary boundaries. Every dish tells a story, every 
                  ambiance creates a memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Dark Background */}
      <section className="about-features-section">
        <div className="container">
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/about/vegetarian.png" alt="100% Vegetarian" className="feature-image" />
              </div>
              <h3>100% Vegetarian</h3>
              <p>Pure, authentic vegetarian cuisine crafted with premium ingredients</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/about/multi_themed.png" alt="Multi-Themed" className="feature-image" />
              </div>
              <h3>Multi-Themed</h3>
              <p>Experience diverse ambiances and flavors under one roof</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/about/premium_experience.png" alt="Premium Experience" className="feature-image" />
              </div>
              <h3>Premium Experience</h3>
              <p>Affordable luxury with exceptional service and ambiance</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/cuisines/north_india.png" alt="900+ Dishes" className="feature-image" />
              </div>
              <h3>900+ Dishes</h3>
              <p>Extensive menu spanning 16 cuisines with something for everyone</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

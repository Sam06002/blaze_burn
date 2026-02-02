import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title fade-in-up">
          Blaze <span className="gradient-text">Burn</span>
        </h1>
        <p
          className="hero-subtitle fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Where Tradition Meets Trend
        </p>
        <p
          className="hero-description fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Ahmedabad's Premium All-Vegetarian, Multi-Themed Food Destination
        </p>
        <div
          className="hero-buttons fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="#contact" className="btn btn-primary">
            Reserve Your Table
          </a>
          <a href="#menu" className="btn btn-outline">
            Explore Menu
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

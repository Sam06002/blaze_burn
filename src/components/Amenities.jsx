import './Amenities.css';

function Amenities() {
  const amenities = [
    {
      title: 'Work-Friendly Cafe',
      description: 'Laptop-friendly zones with high-speed WiFi and power outlets',
      image: '/images/rooftop_cafe_view_1770051214536.png'
    },
    {
      title: 'Romantic Dining',
      description: 'Intimate corners perfect for special moments and celebrations',
      image: '/images/restaurant_about_interior_1770051246364.png'
    },
    {
      title: 'Buffet Experience',
      description: 'Weekend, festive & corporate lunch buffets with unlimited options',
      image: '/images/cultural_dining_traditional_1770052121327.png'
    },
    {
      title: 'Rooftop Café',
      description: 'Dine under the stars with panoramic city views',
      image: '/images/rooftop_cafe_view_1770051214536.png'
    },
    {
      title: 'Live Music',
      description: 'Soulful performances enhancing your dining experience',
      image: '/images/live_music_performance_1770052138025.png'
    },
    {
      title: 'Premium Mocktail Bar',
      description: 'Curated selection of premium non-alcoholic beverages, mocktails, and specialty drinks',
      image: '/images/beverages_drinks_1770051198662.png'
    }
  ];

  return (
    <section id="amenities" className="amenities">
      <div className="amenities-header">
        <h2 className="section-title">Premium Amenities</h2>
        <p className="section-subtitle">
          Every detail crafted to elevate your dining experience
        </p>
      </div>
      
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div 
            key={index} 
            className="amenity-card"
            style={{ 
              backgroundImage: `url(${amenity.image})`,
              animationDelay: `${index * 0.15}s` 
            }}
          >
            <div className="amenity-card-overlay">
              <h3>{amenity.title}</h3>
              <p className="amenity-description">{amenity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;

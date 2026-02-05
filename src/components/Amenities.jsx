import './Amenities.css';

function Amenities() {
  const amenities = [
    {
      icon: '💻',
      title: 'Work-Friendly Cafe',
      description: 'Laptop-friendly zones with high-speed WiFi and power outlets'
    },
    {
      icon: '🌿',
      title: 'Jain Food',
      description: 'Authentic Jain cuisine prepared following traditional guidelines'
    },
    {
      icon: '💑',
      title: 'Romantic Dining',
      description: 'Intimate corners perfect for special moments and celebrations'
    },
    {
      icon: '🍽️',
      title: 'Buffet Experience',
      description: 'Weekend, festive & corporate lunch buffets with unlimited options'
    },
    {
      icon: '⏰',
      title: 'All-Day Dining',
      description: 'Breakfast, lunch, and dinner served throughout the day'
    },
    {
      icon: '🍸',
      title: 'Premium Bar',
      description: 'Curated selection of premium beverages and cocktails'
    }
  ];

  return (
    <section id="amenities" className="amenities section">
      <div className="container">
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="amenity-icon-wrapper">
                <div className="amenity-icon">{amenity.icon}</div>
              </div>
              <h3>{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;

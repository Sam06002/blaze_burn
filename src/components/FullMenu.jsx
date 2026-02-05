import { useState } from 'react';
import './FullMenu.css';

function FullMenu() {
  const [activeTab, setActiveTab] = useState('indian');
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const indianCuisines = [
    {
      name: 'North India',
      image: '/images/cuisines/north_india.png',
      items: ['Punjabi Dishes', 'Kashmiri Delicacies', 'Rajasthani Specialties', 'Delhi Street Food']
    },
    {
      name: 'Gujarat (Ahmedabad Focused)',
      image: '/images/cuisines/gujarat.png',
      items: ['Dhokla', 'Khandvi', 'Thepla', 'Undhiyu', 'Gujarati Thali']
    },
    {
      name: 'Maharashtra',
      image: '/images/cuisines/maharashtra.png',
      items: ['Pav Bhaji', 'Misal Pav', 'Vada Pav', 'Puran Poli', 'Maharashtrian Thali']
    },
    {
      name: 'South India',
      image: '/images/cuisines/south_india.png',
      items: ['Dosa Varieties', 'Idli & Vada', 'Uttapam', 'South Indian Thali', 'Kerala Specials']
    },
    {
      name: 'East India',
      image: '/images/cuisines/east_india.png',
      items: ['Bengali Sweets', 'Odisha Delicacies', 'Assamese Dishes', 'Bengal Veg Specialties']
    },
    {
      name: 'Central India',
      image: '/images/cuisines/central_india.png',
      items: ['MP Specialties', 'Chhattisgarh Dishes', 'Traditional Thalis', 'Regional Favorites']
    },
    {
      name: 'Indian Street Food',
      image: '/images/cuisines/street_food.png',
      items: ['Chaat Varieties', 'Pani Puri', 'Bhel Puri', 'Rolls & Frankie', 'Wraps & More']
    },
    {
      name: 'Indian Desserts',
      image: '/images/cuisines/indian_desserts.png',
      items: ['Traditional Sweets', 'Halwa Varieties', 'Modern Plated Desserts', 'Fusion Desserts']
    }
  ];

  const internationalCuisines = [
    {
      name: 'Italian',
      image: '/images/cuisines/italian.png',
      items: ['Pasta Varieties', 'Wood-Fired Pizzas', 'Classic & Fusion Pizza', 'Risotto & Sides']
    },
    {
      name: 'Chinese / Indo-Chinese',
      image: '/images/cuisines/chinese.png',
      items: ['Hakka Noodles', 'Fried Rice', 'Manchurian', 'Gravies & Starters']
    },
    {
      name: 'Mexican',
      image: '/images/cuisines/mexican.png',
      items: ['Tacos & Burritos', 'Quesadillas', 'Nachos & Sides', 'Indianized Mexican']
    },
    {
      name: 'Thai',
      image: '/images/cuisines/thai.png',
      items: ['Thai Curries', 'Rice & Noodles', 'Tom Yum', 'Thai Starters']
    },
    {
      name: 'Japanese',
      image: '/images/cuisines/japanese.png',
      items: ['Veg Sushi', 'Fusion Sushi', 'Ramen Bowls', 'Indian-Japanese Fusion']
    },
    {
      name: 'Middle Eastern',
      image: '/images/cuisines/middle_eastern.png',
      items: ['Mezze Platters', 'Wraps & Shawarma', 'Falafels', 'Traditional Sides']
    },
    {
      name: 'American',
      icon: '🍔',
      items: ['Gourmet Burgers', 'Loaded Fries', 'Mac & Cheese', 'American Mains']
    },
    {
      name: 'Continental / Global Fusion',
      icon: '🌍',
      items: ['European Veg Dishes', 'Global Bowls', 'Fusion Specials', 'Contemporary Plates']
    }
  ];

  const menuData = {
    indian: indianCuisines,
    international: internationalCuisines
  };

  return (
    <section id="full-menu" className="full-menu section">
      <div className="container">
        {/* Tab Navigation */}
        <div className="menu-tabs">
          <button
            className={`menu-tab ${activeTab === 'indian' ? 'active' : ''}`}
            onClick={() => setActiveTab('indian')}
          >
            <span className="tab-label">Indian Regional</span>
          </button>
          <button
            className={`menu-tab ${activeTab === 'international' ? 'active' : ''}`}
            onClick={() => setActiveTab('international')}
          >
            <span className="tab-label">International</span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          <div className="cuisines-grid">
            {menuData[activeTab].map((cuisine, index) => (
              <div 
                key={index} 
                className={`cuisine-card ${expandedCategories[cuisine.name] ? 'expanded' : ''}`}
              >
                <div 
                  className="cuisine-header"
                  onClick={() => toggleCategory(cuisine.name)}
                >
                  <div className="cuisine-title-group">
                    {cuisine.image && (
                      <img 
                        src={cuisine.image} 
                        alt={cuisine.name} 
                        className="cuisine-image" 
                      />
                    )}
                    {cuisine.icon && <span className="cuisine-icon">{cuisine.icon}</span>}
                    <h3>{cuisine.name}</h3>
                  </div>
                  <span className="expand-icon">
                    {expandedCategories[cuisine.name] ? '−' : '+'}
                  </span>
                </div>
                
                {expandedCategories[cuisine.name] && (
                  <div className="cuisine-items">
                    <ul>
                      {cuisine.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="view-full-link">
                      <a href="#contact">View Full {cuisine.name} Menu →</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer-note">
          <p>
            ✨ All dishes are 100% vegetarian with Jain options available
          </p>
          <p>
            📋 Complete menu with 900+ items available on request
          </p>
        </div>
      </div>
    </section>
  );
}

export default FullMenu;

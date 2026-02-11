import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo Section - Left */}
        <Link to="/" className="navbar-brand">
          <img src="/blazeburn-icon.svg" alt="Blazeburn Icon" className="brand-icon" />
          <div className="brand-text">
            <h1>Blazeburn</h1>
            <span className="brand-tagline">DELICIOUSLY CRAFTED</span>
          </div>
        </Link>

        {/* Navigation - Hidden until needed */}
        <nav className="navbar-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
          >
            Menu
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

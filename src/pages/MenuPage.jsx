import FullMenu from '../components/FullMenu';
import Footer from '../components/Footer';
import './MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page">
      <div className="menu-page-hero">
        <div className="container">
          <h1 className="menu-page-title">Our Complete Menu</h1>
          <p className="menu-page-subtitle">
            16 World Cuisines • 900+ Vegetarian Delicacies • Jain Options Available
          </p>
        </div>
      </div>
      <FullMenu />
      <Footer />
    </div>
  );
}

export default MenuPage;

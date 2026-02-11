import Hero from '../components/Hero';
import About from '../components/About';
import MenuHighlights from '../components/MenuHighlights';
import Amenities from '../components/Amenities';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const SectionDivider = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '80px 0',
  }}>
    <div style={{
      width: '60%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #d4af37 20%, #d4af37 80%, transparent)',
    }} />
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SectionDivider />
      <MenuHighlights />
      <SectionDivider />
      <Amenities />
      <SectionDivider />
      <Features />
      <Footer />
    </>
  );
}

export default HomePage;

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-hero">
        <div className="container">
          <h1 className="contact-page-title">Get In Touch</h1>
          <p className="contact-page-subtitle">
            We'd love to hear from you
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;

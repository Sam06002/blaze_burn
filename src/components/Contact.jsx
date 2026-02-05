import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+91 7228028036</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>info.blazeburn@gmail.com</p>
              <p>mehulvaghela291@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Opening Soon</h3>
              <p>Coming to Ahmedabad in 2026</p>
            </div>
          </div>
          <div className="contact-form-container">
            <h3>Inquire Us</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Inquiry Type</option>
                  <option value="general">General Inquiry</option>
                  <option value="franchise">Franchise Opportunity</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="events">Corporate Events</option>
                  <option value="catering">Catering Services</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


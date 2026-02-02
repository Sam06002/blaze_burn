import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">
            Experience the Blaze Burn difference
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Prahladnagar - SG Highway Corridor</p>
              <p>Ahmedabad, Dascroi, Gujarat</p>
            </div>
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
            <h3>Reserve Your Table</h3>
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
                <input type="date" placeholder="Preferred Date" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Number of Guests</option>
                  <option value="1-2">1-2 People</option>
                  <option value="3-5">3-5 People</option>
                  <option value="6-10">6-10 People</option>
                  <option value="10+">10+ People (Event)</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Special Requests (Optional)" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Reservation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

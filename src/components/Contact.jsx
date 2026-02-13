import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
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
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.96020610813!2d72.4890635!3d23.0204741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahmedabad Map"
              ></iframe>
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


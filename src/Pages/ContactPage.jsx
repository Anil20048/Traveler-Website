import React, { useState } from "react";
import "../styles/ContactPage.css";




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "918765432100"; // your WhatsApp number
    const text = `Hello! My name is ${name}. My email is ${email}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Get in touch with us today.</p>
        </div>
      </section>

      {/* ---------- CONTACT CARDS (Beautiful UI) ---------- */}
      <section className="contact-info">
        <div className="contact-card fancy">
          <div className="icon-box email">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email Us</h3>
          <p>support@example.com</p>
        </div>

        <div className="contact-card fancy">
          <div className="icon-box phone">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card fancy">
          <div className="icon-box location">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Visit Us</h3>
          <p>Sector 65, Noida, Uttar Pradesh, India</p>
        </div>
      </section>

      {/* ---------- CONTACT FORM + MAP ---------- */}
      <section className="contact-section">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <button type="submit">Send on WhatsApp</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.0371198744!2d77.3848706!3d28.5966438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b401d9b9f3%3A0x4a6f48c49c5e4e52!2sSector%2065%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1704567890123!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

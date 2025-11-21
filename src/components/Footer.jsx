import React from "react";
import "../styles/Footer.css"; // अगर आपने custom CSS बनाई है

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Traveler</h3>
        <p>Your gateway to amazing travel experiences.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/PrivacyPage">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Traveler. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

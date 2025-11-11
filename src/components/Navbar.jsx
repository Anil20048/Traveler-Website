import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // अगर custom CSS है

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Traveler</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

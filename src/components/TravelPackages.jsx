// src/components/TravelPackages.jsx
import React from "react";
import "../styles/TravelPackages.css";

const packages = [
  {
    id: 1,
    name: "Basic Plan",
    price: 4999,
    description: "Perfect for solo travelers.",
    features: ["3 Days / 2 Nights", "City Tour", "Free Breakfast"],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 9999,
    description: "Ideal for couples and friends.",
    features: ["5 Days / 4 Nights", "Adventure Activities", "Hotel Stay"],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 14999,
    description: "Luxury experience for families.",
    features: ["7 Days / 6 Nights", "Luxury Hotel", "Full Guide Support"],
  },
];

const TravelPackages = ({ onSelectPlan }) => {
  return (
    <section className="packages-section">
      <h2 className="packages-title">Choose Your Travel Package</h2>
      <div className="packages-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name}</h3>
            <p className="package-price">₹{pkg.price}</p>
            <p>{pkg.description}</p>
            <ul>
              {pkg.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
            <button
              className="select-btn"
              onClick={() => onSelectPlan(pkg)}
            >
              Book {pkg.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelPackages;

// src/pages/BookingPage.jsx
import React, { useState } from "react";
import TravelPackages from "../components/TravelPackages";
import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="booking-page">
      <section className="hero-anil">
        <h1>Hero → Package Selection</h1>
        <p>Book your next adventure with us!</p>
      </section>

      <TravelPackages onSelectPlan={setSelectedPlan} />
      <BookingForm selectedPlan={selectedPlan} />
    </div>
  );
};

export default BookingPage;

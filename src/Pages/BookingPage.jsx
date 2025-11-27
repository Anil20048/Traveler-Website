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
        <h1>Book Your Next Adventure With Us</h1>
        <p>Book your next adventure with us and discover breathtaking destinations, unforgettable experiences, comfortable stays, exciting activities, seamless planning, and stress-free travel designed to make every journey memorable and truly extraordinary for you.</p>
      </section>

      <TravelPackages onSelectPlan={setSelectedPlan} />
      <BookingForm selectedPlan={selectedPlan} />
    </div>
  );
};

export default BookingPage;

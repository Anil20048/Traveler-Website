
import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalAmount = selectedPlan.price * formData.travelers;

    alert(
      `Booking confirmed!\nPlan: ${selectedPlan?.name}\nTravelers: ${formData.travelers}\nTotal Amount: ₹${totalAmount}\nName: ${formData.name}\nEmail: ${formData.email}`
    );

    // 🔗 Razorpay integration (dummy setup)
    const options = {
      key: "rzp_test_123456789", // Replace with your Razorpay Key
      amount: totalAmount * 100, // Paise me convert
      currency: "INR",
      name: "Traveler Website",
      description: `Booking for ${selectedPlan?.name}`,
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!selectedPlan) {
    return <p className="no-plan">⚠️ Please select a plan first  .</p>;
  }

  const totalAmount = selectedPlan.price * formData.travelers;

  return (
   
    <section className="booking-form-section">
      <div className="booking-container">
        {/* LEFT - Form */}
        <div className="form-left">
          <h2>Booking Form</h2>
          <div className="selected-plan">
            <h3>Selected Plan: {selectedPlan.name}</h3>
            <p>Price per traveler: ₹{selectedPlan.price}</p>
            <p><b>Total: ₹{totalAmount}</b></p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="travelers"
              placeholder="No. of Travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              required
            />
            <button type="submit" className="submit-btn">
              Proceed to Pay
            </button>
          </form>
        </div>

        {/* RIGHT - Map */}
        <div className="map-right">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609862592!2d72.74109974213294!3d19.08219783960922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c0b9f1f7d%3A0x8e8e6f53d58b69c2!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677505932654!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

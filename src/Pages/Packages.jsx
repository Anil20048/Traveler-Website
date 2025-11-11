// PackagesHero.jsx
import React, { useState } from "react";
import "../styles/Packages.css";
import Slider from "react-slick";
import { FaUmbrellaBeach, FaHiking, FaHeart, FaUsers, FaCrown } from "react-icons/fa";

// Categories Data
const categories = [
  { icon: <FaUmbrellaBeach />, title: "Beach Holidays", desc: "Relax on the world's most beautiful beaches." },
  { icon: <FaHiking />, title: "Adventure Trips", desc: "Thrilling adventures for adrenaline seekers." },
  { icon: <FaHeart />, title: "Honeymoon Packages", desc: "Romantic destinations for newlyweds." },
  { icon: <FaUsers />, title: "Family Tours", desc: "Fun-filled trips for the whole family." },
  { icon: <FaCrown />, title: "Luxury Packages", desc: "Premium travel experiences in style." },
];

// All Packages
const packages = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1708226063129-91a33fab7462?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFsZGl2ZXMlMjBHZXRhd2F5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Maldives Getaway",
    desc: "Experience crystal-clear waters & luxury stays.",
    price: "Starting from $499",
    duration: "5 Days / 4 Nights",
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1824244300/photo/family-enjoys-time-together-on-mountain-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=RB9pDquZ8HdSCbcIGOQnRJRNmRcH-C3iq2fHkb5Klf8=",
    title: "Swiss Adventure",
    desc: "Explore the Alps with thrilling hikes & views.",
    price: "Starting from $799",
    duration: "7 Days / 6 Nights",
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1722686474014-b68d413a9b65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmFsaSUyMEhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    title: "Bali Honeymoon",
    desc: "Romantic beaches & private pool villas.",
    price: "Starting from $699",
    duration: "6 Days / 5 Nights",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1601782831016-b5dd04f6501c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVneXB0JTIwRmFtaWx5JTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    title: "Egypt Family Tour",
    desc: "Discover pyramids, culture, & ancient history.",
    price: "Starting from $899",
    duration: "8 Days / 7 Nights",
  },
];

// Featured Packages for Slider
const featuredPackages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1615277716590-d87d101caa70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    title: "Maldives Luxury Escape",
    price: "From $599",
    duration: "5D / 4N",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1708991821718-2fe9e29c40f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
    title: "Swiss Alps Adventure",
    price: "From $899",
    duration: "7D / 6N",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1709776194187-616285a5728d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9tYW50aWMlMjBCYWxpJTIwSG9uZXltb29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Romantic Bali Honeymoon",
    price: "From $749",
    duration: "6D / 5N",
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/480710064/photo/abu-simbel.webp?a=1&s=612x612&w=0&k=20&c=9uFIyeQE0QFlHbnpRgKK-sO2RjaCTHkAV_MnYwVe8HE=",
    title: "Discover Egypt",
    price: "From $999",
    duration: "8D / 7N",
  },
];

// ✅ Featured Deals Slider Component
const FeaturedDeals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="featured-deals">
      <h2 className="section-title">🌟 Featured Deals</h2>
      <Slider {...settings}>
        {featuredPackages.map((deal) => (
          <div key={deal.id} className="featured-card">
            <img src={deal.image} alt={deal.title} className="featured-img" />
            <div className="featured-info">
              <h3>{deal.title}</h3>
              <p>{deal.price}</p>
              <span>{deal.duration}</span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// ✅ Package Details Modal Component
const PackageDetailsModal = ({ selectedPackage, onClose }) => {
  if (!selectedPackage) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>{selectedPackage.title}</h2>
        <img src={selectedPackage.image} alt={selectedPackage.title} className="modal-img" />
        <p>{selectedPackage.desc}</p>

        <h3>📅 Itinerary</h3>
        <ul>
          <li>Day 1: Arrival & Welcome Dinner</li>
          <li>Day 2: City Tour & Activities</li>
          <li>Day 3: Excursions & Leisure</li>
          <li>Day 4: Relaxation / Shopping</li>
          <li>Day 5: Departure</li>
        </ul>

        <h3>✅ Inclusions</h3>
        <ul>
          <li>Hotel Accommodation</li>
          <li>Daily Breakfast</li>
          <li>Airport Transfers</li>
          <li>Sightseeing Tours</li>
        </ul>

        <h3>❌ Exclusions</h3>
        <ul>
          <li>Flight Tickets</li>
          <li>Personal Expenses</li>
          <li>Travel Insurance</li>
        </ul>

        <h3>🗺 Map</h3>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31514.87611364969!2d73.500179!3d4.175278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNC4xNzUyODgsIDczLjUwMDE3OQ!5e0!3m2!1sen!2sin!4v1635674880987!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

// ✅ Main Packages Page
const PackagesHero = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="packages-hero">
        <div className="packages-hero-overlay">
          <div className="packages-hero-content">
            <h1 className="packages-hero-title">Our Travel Packages</h1>
            <p className="packages-hero-tagline">
              Explore the world with our carefully crafted travel packages designed just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="package-categories">
        <div className="package-categories-container">
          <h2 className="section-title">Package Categories</h2>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{cat.icon}</div>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals Slider */}
      <FeaturedDeals />

      {/* Package Cards */}
      <section className="package-section">
        <div className="package-container">
          <h2 className="package-section-title">Featured Travel Packages</h2>
          <div className="package-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-card-image">
                  <img src={pkg.image} alt={pkg.title} />
                </div>
                <div className="package-card-content">
                  <h3 className="package-card-title">{pkg.title}</h3>
                  <p className="package-card-desc">{pkg.desc}</p>
                  <div className="package-card-details">
                    <span className="package-card-price">{pkg.price}</span>
                    <span className="package-card-duration">{pkg.duration}</span>
                  </div>
                  <button className="package-card-btn">Book Now</button>
                  <button className="package-card-btn details-btn" onClick={() => setSelectedPackage(pkg)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      <PackageDetailsModal
        selectedPackage={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
      {/* ✅ Call to Action Banner */}
      {/* ✅ Call to Action Banner (Image Left, Content Right) */}
<section className="cta-banner-split">
  <div className="cta-image">
    <img src="https://media.istockphoto.com/id/639805332/photo/friends-camping-eating-food-concept.jpg?s=612x612&w=0&k=20&c=pWSi6VTqoAIFO8XMyOEeqFLNt5Fx-EaYz0bDndhaUHU=" alt="Dream Vacation" />
  </div>
  <div className="cta-content">
    <h2 className="cta-title">Ready for your dream vacation?</h2>
    <p className="cta-subtitle">
      Book your package today and make unforgettable memories.
    </p>
    <a href="/booking" className="cta-btn">Book Now</a>
  </div>
</section>


    </>
  );
};

export default PackagesHero;

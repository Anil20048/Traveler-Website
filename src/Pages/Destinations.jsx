// src/Pages/Destinations.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Lightbox from "yet-another-react-lightbox";
 import "yet-another-react-lightbox/styles.css";

import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { GiMountainCave, GiHiking, GiTempleGate } from "react-icons/gi";
import "../styles/destinations.css";

const Destinations = () => {

  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      tagline: "Tropical paradise with stunning beaches",
      image: "https://images.unsplash.com/photo-1655289112327-5b9c0fcd1995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJhbGklMkMlMjBJbmRvbmVzaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Paris, France",
      tagline: "City of love and lights",
      image: "https://media.istockphoto.com/id/924894324/photo/eiffel-tower-in-paris-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=7VdXmKnpngpcZcdQtGMKIoX-Rgpm4QY9xrdWogtedTU=",
    },
    {
      id: 3,
      name: "Swiss Alps, Switzerland",
      tagline: "Snow-capped mountains and scenic views",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3dpc3MlMjBBbHBzJTJDJTIwU3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Maldives",
      tagline: "Crystal clear waters and luxury resorts",
      image: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Categories
  const categories = [
    { id: 1, label: "Beaches", icon: <FaUmbrellaBeach /> },
    { id: 2, label: "Mountains", icon: <GiMountainCave /> },
    { id: 3, label: "Cities", icon: <FaCity /> },
    { id: 4, label: "Adventure", icon: <GiHiking /> },
    { id: 5, label: "Historical", icon: <GiTempleGate /> },
  ];

  // Gallery images
  const images = [
    "https://media.istockphoto.com/id/2192375433/photo/victoria-memorial-hall-victoria-park-calcata-west-bengal-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZqB35OneJatj25YCMYRtdXk-M_njLbhyKvG1221zXcU=",
    "https://plus.unsplash.com/premium_photo-1661286620337-300b322edae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsZXIlMjBEZXN0aW5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1631113207679-6ecd41c7f3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbGVyJTIwRGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=BaGIQLeJVZAFy3ktpPYfhFhvXNv3yGltWcOzljwZUUc=",
    "https://media.istockphoto.com/id/468533164/photo/paddling-in-india.jpg?s=612x612&w=0&k=20&c=vj2jqecWlI4QR0yOJV66lqPtfX1Zh5GjboUcygKOamc=",
    "https://media.istockphoto.com/id/2202348409/photo/woman-looking-at-hawa-mahal-in-jaipur-india-from-balcony.jpg?s=612x612&w=0&k=20&c=1VZAfmb-juab5Qpc0CKkfqO8jbC_irfFc0rUafRPaSM=",
  ];

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Reviews
  const reviews = [
    {
      id: 1,
      name: "Amit Sharma",
      location: "Delhi, India",
      review:
        "My trip to Bali was absolutely amazing! Everything was perfectly organized and the beach was breathtaking.",
      image: "https://media.istockphoto.com/id/1391395332/photo/confidence-portrait-of-young-indian-man-with-beard-in-red-background.jpg?s=612x612&w=0&k=20&c=VgRKApaP__6HzMoMzjaNmdDpCPbV9UjQcxIpcxa1Nqo=",
    },
    {
      id: 2,
      name: "Sophia Williams",
      location: "London, UK",
      review:
        "I loved the Swiss Alps! The team helped us plan the best itinerary and the views were surreal.",
      image: "https://media.istockphoto.com/id/1209319382/photo/portrait-of-body-positive-senior-lgbtq-bald-man.jpg?s=612x612&w=0&k=20&c=NXVp-VOwmc3N8nNG0CYtLZYzOiK6G_Saq11sxs0TkYI=",
    },
    {
      id: 3,
      name: "John Smith",
      location: "New York, USA",
      review:
        "Paris was magical! From the Eiffel Tower to the cafes, it was an unforgettable experience.",
      image: "https://media.istockphoto.com/id/1133406107/photo/fat-man-in-the-park-looks-into-the-frame-a-portrait-of-a-man-with-excess-weight.jpg?s=612x612&w=0&k=20&c=OsQgLfpgGwGxPU4rvlmZPrdg4pJjRZabtkRixbYQ6eU=",
    },
    {
      id: 4,
      name: "Priya Verma",
      location: "Mumbai, India",
      review:
        "The Maldives trip was pure luxury. Crystal clear waters and amazing resorts!",
      image: "https://media.istockphoto.com/id/2186824707/photo/portrait-of-a-young-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=y-jNSVvvkgf0YHSuNap73A5jyRrzimqsAcaS8PzVMcI=",
    },
  ];

  const reviewSlider = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <>
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="destinations-overlay">
          <h1 className="destinations-title">Top Travel Destinations</h1>
          <p className="destinations-subtitle">
            Discover the most popular places to visit around the world
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="destinations-featured-section">
        <div className="destinations-featured-container">
          <h2 className="destinations-section-title">Featured Destinations</h2>
          <div className="destinations-grid">
            {destinations.map((dest) => (
              <div key={dest.id} className="destinations-card">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="destinations-card-img"
                />
                <div className="destinations-card-content">
                  <h3 className="destinations-card-title">{dest.name}</h3>
                  <p className="destinations-card-tagline">{dest.tagline}</p>
                  <button className="destinations-card-btn" type="button">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="destinations-categories-section">
        <div className="destinations-categories-container">
          <h2 className="destinations-section-title">Categories</h2>

          {/* Horizontal scroll chips */}
          <div className="destinations-categories-scroller">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="destinations-category-chip"
                type="button"
                onClick={() => console.log(`Filter by: ${cat.label}`)}
              >
                <span className="destinations-category-icon">{cat.icon}</span>
                <span className="destinations-category-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Optional grid showcase */}
          <div className="destinations-categories-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="destinations-category-card">
                <div className="destinations-category-card-icon">
                  {cat.icon}
                </div>
                <h3 className="destinations-category-card-title">
                  {cat.label}
                </h3>
                <p className="destinations-category-card-text">
                  Explore best {cat.label.toLowerCase()} destinations hand-picked
                  for you.
                </p>
                <button className="destinations-card-btn" type="button">
                  View {cat.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="destinations-gallery-section">
        <div className="destinations-gallery-container">
          <h2 className="destinations-section-title">Destination Gallery</h2>
          <div className="destinations-gallery-grid">
            {images.map((src, index) => (
              <div
                key={index}
                className="destinations-gallery-item"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img src={src} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
       {isOpen && (
  <Lightbox
    open={isOpen}
    close={() => setIsOpen(false)}
    index={photoIndex}
    slides={images.map((src) => ({ src }))}
    on={{ view: ({ index }) => setPhotoIndex(index) }}
  />
)}

      </section>

      {/* Reviews */}
      <section className="destinations-reviews-section">
        <div className="destinations-reviews-container">
          <h2 className="destinations-section-title">Traveler Reviews</h2>
          <Slider {...reviewSlider}>
            {reviews.map((rev) => (
              <div key={rev.id} className="destinations-review-card">
                <div className="destinations-review-image">
                  <img src={rev.image} alt={rev.name} />
                </div>
                <p className="destinations-review-text">"{rev.review}"</p>
                <h3 className="destinations-review-name">{rev.name}</h3>
                <span className="destinations-review-location">
                  {rev.location}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="destination-info-section">
  <div className="destination-info-container">
    {/* Left Content */}
    <div className="destination-info-content">
      <h2 className="destination-info-title">Explore the Beauty of Bali</h2>
      <p className="destination-info-text">
        Discover the enchanting island of Bali, where serene beaches meet lush green rice terraces and ancient temples whisper stories of the past. From the vibrant streets of Ubud to the tranquil shores of Nusa Dua, every corner invites peace, adventure, and inspiration. Experience Bali’s culture, flavors, and natural charm like never before.
      </p>
      <button className="destination-info-btn">Book Now</button>
    </div>

    {/* Right Image */}
    <div className="destination-info-image">
      <img src="https://images.unsplash.com/photo-1561472014-a4d9f1eec52b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8" alt="Bali Destination" />
    </div>
  </div>
</section>

    </>
  );
  
};

export default Destinations;

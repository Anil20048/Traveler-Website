import React, { useState } from 'react';

import '../styles/Hero.css';
import close from '../assets/close.webp'; 

import { FaPlus, FaMinus } from 'react-icons/fa';

const Hero = () => {
   const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to travel?",
      answer:
        "The best time to travel depends on your destination. Research weather and tourist seasons before planning.",
    },
    {
      question: "Do I need travel insurance?",
      answer:
        "Yes, it’s always a good idea to have travel insurance to cover unexpected situations.",
    },
    {
      question: "How can I find budget-friendly trips?",
      answer:
        "Use travel deal websites, book early, and travel during the off-season to save money.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Explore the World with Us</h1>
            <p className="hero-subtitle">Discover unforgettable journeys and lifetime memories.</p>
            <a href="/packages" className="hero-button">Explore Now</a>
          </div>
        </div>
      </section>

      {/* 6 Card Section */}
      <section className="home-card-section">
        <div className="home-card-container">
          {/* Row 1 */}
          <div className="home-card-row">
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1638785018577-ae89861271f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" alt="Card 1" className="home-card-img" />
              <h3 className="home-card-title">Card Title 1</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Card 2" className="home-card-img" />
              <h3 className="home-card-title">Card Title 2</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1662119430458-90375db4df40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 3" className="home-card-img" />
              <h3 className="home-card-title">Card Title 3</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="home-card-row">
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1745685088912-85233c4f16ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 4" className="home-card-img" />
              <h3 className="home-card-title">Card Title 4</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
            <div className="home-card-item">
              <img src="https://plus.unsplash.com/premium_photo-1755018427741-2b3e47f204f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 5" className="home-card-img" />
              <h3 className="home-card-title">Card Title 5</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
            <div className="home-card-item">
              <img src="https://plus.unsplash.com/premium_photo-1663051113145-f27b3b73d202?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 6" className="home-card-img" />
              <h3 className="home-card-title">Card Title 6</h3>
              <p className="home-card-desc">Card description goes here.</p>
            </div>
          </div>
        </div>
      </section>
       <section className="image-content-section">
      <div className="image-content-wrapper">
        <div className="image-content-left">
          <img src={close} alt="About" className="image-content-img" />
        </div>
        <div className="image-content-right">
          <h2 className="image-content-title">Discover New Destinations</h2>
          <p className="image-content-text">
            Embark on unforgettable adventures and explore the beauty of the world with us. Our travel experiences are designed to inspire, relax, and rejuvenate.
          </p>
          <a href="/about" className="image-content-button">Learn More</a>
        </div>
      </div>
    </section>
   <section className="video-section">
  <div className="video-container">
    <div className="video-text">
      <h2>Experience the Journey</h2>
      <p>
        Watch breathtaking travel adventures and get inspired for your next trip.
        Discover the beauty of the world from the comfort of your screen.
      </p>
    </div>
    <div className="video-embed">
      <div className="video-wrapper">
        
       <iframe width="560" height="315" src="https://www.youtube.com/embed/VaJv58d416Y?si=653T2msHIdLHLctt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

    <section className="image-360-section">
  <h2 className="image-360-title">Explore Destinations in 360°</h2>
  <div className="image-360-carousel">
    <div className="image-360-rotator">
      {[
        "https://images.unsplash.com/photo-1631631480669-535cc43f2327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMCUyMGltYWdlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1681376737659-4fd70d7e1cb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1683141434194-1eff7231739e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1677182468631-4e11690c56a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1566759996874-04d713cc224a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1630618359030-87764450427d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1597941436097-0131854a6b54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1663047386229-637af57cecfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
      ].map((url, index) => (
        <div className="image-360-item" key={index}>
          <img src={url} alt={`360 ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>
<section className="home-image-left-section">
  <div className="home-image-left-container">
    <div className="home-image-box">
      <img src="https://images.unsplash.com/photo-1723583766302-8503110ab174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D" alt="Travel" />
    </div>
    <div className="home-content-box">
      <h2>Experience the Journey</h2>
      <p>
        Watch breathtaking travel adventures and get inspired for your next trip.
        Discover the beauty of the world from the comfort of your screen.
      </p>
    </div>
  </div>
</section>
 <section className="home-faq-image-section">
        <div className="home-faq-image-container">
          {/* Left - FAQ */}
          <div className="home-faq-box">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="home-faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <button
                    className="faq-toggle-btn"
                    onClick={() => toggleFAQ(index)}
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="home-image-box">
            <img
              src="https://plus.unsplash.com/premium_photo-1661840348789-d4305454faa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
              alt="Travel FAQ"
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;

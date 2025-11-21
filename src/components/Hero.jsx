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
              <h3 className="home-card-title">Goa Beach Escape</h3>
              <p className="home-card-desc">Relax on golden beaches, enjoy vibrant nightlife, and savor delicious seafood. From water sports to sunset cruises, Goa offers the perfect mix of fun, relaxation, and tropical charm for every traveler.</p>
            </div>
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Card 2" className="home-card-img" />
              <h3 className="home-card-title">Manali Mountain Retreat</h3>
              <p className="home-card-desc">Experience the serene beauty of snow-capped peaks, lush valleys, and pine forests. Enjoy adventure sports, cozy stays, and peaceful moments in this charming Himalayan paradise perfect for nature and thrill seekers.</p>
            </div>
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1662119430458-90375db4df40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 3" className="home-card-img" />
              <h3 className="home-card-title">Jaipur Royal Heritage Tour</h3>
              <p className="home-card-desc">Explore the Pink City’s majestic forts, palaces, and vibrant bazaars. Visit Amber Fort, City Palace, and Hawa Mahal while experiencing Rajasthan’s royal culture, colorful traditions, and rich architectural splendor.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="home-card-row">
            <div className="home-card-item">
              <img src="https://images.unsplash.com/photo-1745685088912-85233c4f16ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 4" className="home-card-img" />
              <h3 className="home-card-title">Kerala Backwater Cruise</h3>
              <p className="home-card-desc">Sail through Kerala’s tranquil backwaters surrounded by lush greenery and coconut palms. Enjoy a peaceful houseboat stay, traditional cuisine, and the serene charm of Alleppey’s scenic canals and lagoons.</p>
            </div>
            <div className="home-card-item">
              <img src="https://plus.unsplash.com/premium_photo-1755018427741-2b3e47f204f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 5" className="home-card-img" />
              <h3 className="home-card-title">Ladakh Adventure Expedition</h3>
              <p className="home-card-desc">Embark on a thrilling journey through Ladakh’s majestic mountains, serene monasteries, and high-altitude lakes. Experience biking on rugged terrains, camping under starry skies, and exploring the breathtaking beauty of the Himalayas.</p>
            </div>
            <div className="home-card-item">
              <img src="https://plus.unsplash.com/premium_photo-1663051113145-f27b3b73d202?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" alt="Card 6" className="home-card-img" />
              <h3 className="home-card-title">Andaman Island Getaway</h3>
              <p className="home-card-desc">Experience the tropical paradise of Andaman with crystal-clear waters, white sandy beaches, and coral reefs. Enjoy scuba diving, island hopping, underwater adventures, and relax amid breathtaking natural beauty.</p>
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
          <h2 className="image-content-title">Experience the Beauty of Travel</h2>
          <p className="image-content-text">
            Step into a world of breathtaking landscapes, diverse cultures, and unforgettable adventures. From serene beaches to majestic mountains, every journey offers something extraordinary. Discover hidden gems, savor local flavors, and create lasting memories with every destination you explore. Travel not just to see the world — but to truly experience its beauty, heart, and spirit.
          </p>
          <a href="/about" className="image-content-button">Learn More</a>
        </div>
      </div>
    </section>
   <section className="video-section">
  <div className="video-container">
    <div className="video-text">
      <h2>Embrace the Adventure</h2>
      <p>
       Set out to explore the world’s wonders, where every road leads to a new story. Discover hidden gems, connect with diverse cultures, and create memories that last a lifetime. Traveling isn’t just about reaching places — it’s about feeling alive, learning, and embracing the beauty of the unknown.
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
       Embark on a path filled with adventure, discovery, and inspiration. Every journey tells a story — of places explored, people met, and memories created. Travel beyond destinations to experience cultures, nature, and emotions that shape who we are. Let every step remind you that the journey itself is the true reward.
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

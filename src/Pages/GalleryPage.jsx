import React, { useState } from "react";
import "../styles/GalleryPage.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ✅ Travel Images
const images = [
  { src: "https://media.istockphoto.com/id/2188741552/photo/a-young-woman-plays-the-guitar-while-camping-with-friends-they-enjoy-hanging-out-and-toasting.jpg?s=612x612&w=0&k=20&c=0b5y82-UB3aDMfE4h59j0L6X9vNhe72AE1kpHYMHcx8=", category: "Beaches" },
  { src: "https://media.istockphoto.com/id/1368207240/photo/young-couple-enjoying-beautiful-morning-at-camping.jpg?s=612x612&w=0&k=20&c=ONk5NqZ_DKoxf2A3k8xUF1t64aXSPQjUNWP55s99jWc=", category: "Mountains" },
  { src: "https://media.istockphoto.com/id/1369519290/photo/young-couple-having-coffee-by-the-campfire.jpg?s=612x612&w=0&k=20&c=ckz-Lfz9KBIaNE5S5hcc1o7voytZ6IFrjDrzwphE5a8=", category: "Cities" },
  { src: "https://media.istockphoto.com/id/1474244077/photo/group-of-happy-multiracial-friend-set-up-a-campfire-party-by-the-lake-at-sunset.jpg?s=612x612&w=0&k=20&c=47-4qNp0w-GCoyzgOG_icoy9uU-7jDeNkKmX-VhSkds=", category: "Adventures" },
  { src: "https://media.istockphoto.com/id/2188426094/photo/friends-camping-by-the-lake.jpg?s=612x612&w=0&k=20&c=zMe4XHcRoRISwX8ZaHmvFRvdxNPyUirGtC7J_7IFL1U=", category: "Beaches" },
  { src: "https://media.istockphoto.com/id/1474244082/photo/group-of-happy-multiracial-friend-set-up-a-campfire-party-by-the-lake-at-sunset.jpg?s=612x612&w=0&k=20&c=rGqwVE5h0j7xPYFw4FRAZ0hEhDCXccEujR6ciFSfZ78=", category: "Mountains" },
  { src: "https://media.istockphoto.com/id/1243469506/photo/mother-and-daughters-bonding-while-camping-in-nature.jpg?s=612x612&w=0&k=20&c=2qDWm3mdL30Hmn8jSk5hp6BAwLtrjKOGn7BSES75xQc=", category: "Cities" },
  { src: "https://media.istockphoto.com/id/2174643752/photo/friends-having-fun-while-camping-by-the-lake.jpg?s=612x612&w=0&k=20&c=LgZ7_Ppj6iNqkgDICi2zYizcstiq6ro-wtg7FGvPt2k=", category: "Adventures" },
];

// ✅ Event Posters
const eventPosters = [
  { src: "https://media.istockphoto.com/id/2162653995/photo/kings-canyon-national-park.webp?a=1&s=612x612&w=0&k=20&c=ygZDmxtDjy6Cy8oLsE-FB_GDJff97Yioz54gzbM-lWY=", title: "Summer Festival 2023" },
  { src: "https://images.unsplash.com/photo-1718954024431-be02d5d4ddd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8", title: "Winter Gala 2024" },
  { src: "https://images.unsplash.com/photo-1725120239192-d89998003c01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8", title: "Beach Party" },
  { src: "https://plus.unsplash.com/premium_photo-1744984306189-49ddd3b72330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8", title: "Upcoming Sneak Peek" },
];

// ✅ Video Highlights (YouTube embed)
const videos = [
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/ScMzIvxBSi4",
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Posters lightbox
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      {/* ✅ Hero Section */}
      <div className="gallery-page">
        <section className="gallery-hero">
          <div className="gallery-hero-overlay">
            <h1 className="gallery-title">Travel Gallery</h1>
            <p className="gallery-subtitle">
              Explore breathtaking journeys & unforgettable memories
            </p>
          </div>
        </section>
      </div>

      {/* ✅ Image Gallery */}
      <section className="gallery-section">
        <h2 className="gallery-title">Image Gallery</h2>

        {/* Filters */}
        <div className="gallery-filters">
          {["All", "Beaches", "Mountains", "Cities", "Adventures"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img src={img.src} alt={img.category} />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={filteredImages.map((img) => ({ src: img.src }))}
          />
        )}
      </section>

      {/* ✅ Video Highlights */}
      <section className="video-highlights">
        <h2 className="gallery-title">Video Highlights</h2>
        <p className="gallery-subtitle">Relive our favorite travel moments</p>

        <div className="video-carousel">
          {videos.map((url, index) => (
            <div key={index} className="video-item">
              <iframe
                width="100%"
                height="300"
                src={url}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Event Posters & Memories */}
      <section className="event-posters">
        <h2 className="gallery-title">Event Posters & Memories</h2>
        <p className="gallery-subtitle">
          Relive our past events and get a sneak peek into upcoming ones
        </p>

        <div className="poster-grid">
          {eventPosters.map((poster, index) => (
            <div
              key={index}
              className="poster-card"
              onClick={() => {
                setPosterIndex(index);
                setIsPosterOpen(true);
              }}
            >
              <img src={poster.src} alt={poster.title} className="poster-img" />
              <div className="poster-overlay">
                <h3>{poster.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Poster Lightbox */}
        {isPosterOpen && (
          <Lightbox
            open={isPosterOpen}
            close={() => setIsPosterOpen(false)}
            index={posterIndex}
            slides={eventPosters.map((p) => ({ src: p.src }))}
          />
        )}
      </section>
      {/* ✅ Special Performances / Cultural Moments */}
<section className="special-performances">
  <h2 className="gallery-title">Special Performances & Cultural Moments</h2>
  <p className="gallery-subtitle">
    Experience local culture through dance, food, and vibrant festivals
  </p>

  <div className="special-grid">
    {/* Images */}
    <div className="special-item">
      <img src="https://images.unsplash.com/photo-1645264090488-a019de493023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8" alt="Traditional Dance" />
      <p>Traditional Dance</p>
    </div>
    <div className="special-item">
      <img src="https://plus.unsplash.com/premium_photo-1664472706956-42f42184f7a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3VsdHVyYWwlMjBNb21lbnRzJTIwJTIwdHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D" alt="Local Cuisine" />
      <p>Local Cuisine</p>
    </div>
    <div className="special-item">
      <img src="https://plus.unsplash.com/premium_photo-1682091942392-bc2842010e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEN1bHR1cmFsJTIwTW9tZW50cyUyMCUyMHRyYXZlbGVyfGVufDB8fDB8fHww" alt="Festival Celebration" />
      <p>Festival Celebration</p>
    </div>

    {/* Short Video Clips */}
    <div className="special-item">
      <video width="100%" height="200" controls loop autoPlay muted>
        <source src="https://www.youtube.com/watch?v=UiCKTErdRTQ" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Dance Performance</p>
    </div>

    <div className="special-item">
      <video width="100%" height="200" controls loop autoPlay muted>
        <source src="https://www.youtube.com/watch?v=UiCKTErdRTQ" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Street Food Highlights</p>
    </div>
  </div>
</section>
{/* ✅ Awards & Recognitions Showcase */}
<section className="awards-showcase">
  <h2 className="gallery-title">Awards & Recognitions</h2>
  <p className="gallery-subtitle">
    Our journey of excellence, captured through awards and recognitions
  </p>

  <div className="awards-grid">
    {/* Award Images */}
    <div className="award-item">
      <img src="https://plus.unsplash.com/premium_photo-1661382529888-276810738300?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbGVyfGVufDB8fDB8fHww" alt="Best Travel Agency Award" />
      <p>Best Travel Agency 2024</p>
    </div>
    <div className="award-item">
      <img src="https://media.istockphoto.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=BaGIQLeJVZAFy3ktpPYfhFhvXNv3yGltWcOzljwZUUc=" alt="Certificate of Excellence" />
      <p>Certificate of Excellence</p>
    </div>
    <div className="award-item">
      <img src="https://media.istockphoto.com/id/1023204764/photo/women-looking-for-the-destination-using-her-pad.jpg?s=612x612&w=0&k=20&c=KT9NU_IC9wdPqyB-6RWOHYhMLOT7Zq60dAhOvfqo9hE=" alt="Media Recognition" />
      <p>Featured in Travel Magazine</p>
    </div>
    <div className="award-item">
      <img src="https://media.istockphoto.com/id/1293757564/photo/man-piggybacking-his-wife-at-park.jpg?s=612x612&w=0&k=20&c=PEo_aTEDxaqEuuvrkwz9SvIFpukBcHBz-NNJbeO6SdY=" alt="Team Celebration" />
      <p>Team Award Celebration</p>
    </div>
  </div>
</section>
{/* ✅ Theme Nights / Seasonal Tours */}
<section className="theme-nights">
  <h2 className="gallery-title">Theme Nights & Seasonal Tours</h2>
  <p className="gallery-subtitle">
    Relive our magical seasonal journeys & themed travel nights
  </p>

  <div className="theme-gallery">
    {/* Summer Escapes */}
    <div className="theme-group">
      <h3 className="theme-heading">☀️ Summer Escapes</h3>
      <div className="theme-grid">
        <img src="https://media.istockphoto.com/id/2202424881/photo/selfie-man-and-woman-on-boat-on-udaipur-lake.jpg?s=612x612&w=0&k=20&c=WRgcQVYyiLPUSa5Mr29P4Q0mXfgcLLL_oFImCnos43s=" alt="Summer Beach" />
        <img src="https://media.istockphoto.com/id/2220065861/photo/couple-toasting-wine-at-romantic-outdoor-picnic.jpg?s=612x612&w=0&k=20&c=2miMKrV09qecZXc0ZVBJTU0sNdTLDy349M4yfvMjSqU=" alt="Summer Resort" />
        <img src="https://media.istockphoto.com/id/2210667704/photo/friends-looking-at-view-while-hiking-in-forest.jpg?s=612x612&w=0&k=20&c=2pIyyjT2myuDITj6mAaqQd02VIT4SJKkDOcL59slN_I=" alt="Island Adventure" />
      </div>
    </div>

    {/* Winter Adventures */}
    <div className="theme-group">
      <h3 className="theme-heading">❄️ Winter Adventures</h3>
      <div className="theme-grid">
        <img src="https://media.istockphoto.com/id/1447873073/photo/happy-indian-senior-couple-standing-together-at-summer-park.jpg?s=612x612&w=0&k=20&c=axcHxyv4w6tymdLNGPmwjUVQW9I5dKH99Qg47mAm8d0=" alt="Snow Mountains" />
        <img src="https://media.istockphoto.com/id/1293566560/photo/couple-admiring-view-at-park.jpg?s=612x612&w=0&k=20&c=e56PRp7RjavOgS50r3BF4aTg0_vZzLp7Ed4uute_0Lg=" alt="Ski Trip" />
        <img src="https://media.istockphoto.com/id/1457954370/photo/young-muslim-couple-enjoy-the-sunrise-with-view-of-hot-balloon-in-goreme.jpg?s=612x612&w=0&k=20&c=c-Yn-hJXTvdrHgAjnxAxSstpPnawgRBYxk_mXotuyvc=" alt="Frozen Lake" />
      </div>
    </div>

    {/* Festival Nights */}
    <div className="theme-group">
      <h3 className="theme-heading">🎉 Festival Nights</h3>
      <div className="theme-grid">
        <img src="https://media.istockphoto.com/id/1179757503/photo/we-havent-had-such-fun-in-a-while.jpg?s=612x612&w=0&k=20&c=bFkVqbbSq_hrZwnuRoc9Hh2vYddwp9Bscv6ANMHnqp0=" alt="Festival Lights" />
        <img src="https://media.istockphoto.com/id/1135107575/photo/family-welcoming-guests-or-in-namaste-namaskara-pose-while-looking-at-camera-in-celebration.jpg?s=612x612&w=0&k=20&c=FZ4kQWlOKz9Dj_jz3WwK8wHUqpW17s63Q_yGKEpQJos=" alt="Cultural Celebration" />
        <img src="https://media.istockphoto.com/id/2185538042/photo/mid-adult-couple-in-traditional-attire-having-fun-and-laughing-moments-standing-in-the.jpg?s=612x612&w=0&k=20&c=8nPpx02cqqEgF-pUH-CEjhZuBEawp0OQiIengXSgn0c=" alt="Music Night" />
      </div>
    </div>
  </div>
</section>
{/* ✅ Call to Action Banner */}
<section className="cta-banner">
  <div className="cta-container">
    {/* Left Image */}
    <div className="cta-image">
      <img src="https://media.istockphoto.com/id/931477218/photo/group-of-adult-friends-by-a-lake-smiling-to-camera-close-up.jpg?s=612x612&w=0&k=20&c=usYAXwC8SAfl3RVNnlm8vA00K3wNDp6XQWu9wUCcQWk=" alt="Travel CTA" />
    </div>

    {/* Right Content */}
    <div className="cta-content">
      <h2>Want to be part of our next journey?</h2>
      <p>Join us as we explore the world’s most mesmerizing destinations and uncover hidden gems that inspire wonder and adventure. Whether you’re a solo traveler, a couple seeking romance, or a group chasing thrill and discovery, there’s a place waiting just for you. Let’s create stories together, capture unforgettable memories, and turn your travel dreams into beautiful realities. Your next adventure begins now!</p>
      <a href="/booking" className="cta-btn">Book Now</a>
    </div>
  </div>
</section>

    </>
  );
};

export default GalleryPage;

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../styles/AboutPage.css";

const About = () => {
  // Detect when Achievements section is visible
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="about-page">

      {/* 1️⃣ Hero Banner */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Our Blog</h1>
          <p>We’re passionate storytellers sharing insights, travel tales, and tech guides with readers worldwide.</p>
        </div>
      </section>

      {/* 2️⃣ Our Story */}
   <section className="our-story">
  <div className="container">
    <div className="story-text">
      <h2>Our Story</h2>
      <p>
        Founded in 2024, our blog began with a simple goal — to create a space for meaningful stories that inspire and inform. 
        We believe in blending creativity with technology to connect with people everywhere.
      </p>
    </div>
    <img
      src="https://plus.unsplash.com/premium_photo-1676550901098-ef91a54010af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
      alt="Our Story"
    />
  </div>
</section>


      {/* 3️⃣ Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[
            {
              name: "Anil Yadav",
              role: "Founder & Developer",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Riya Sharma",
              role: "Content Strategist",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Arjun Patel",
              role: "Travel Writer",
              img: "https://randomuser.me/api/portraits/men/78.jpg",
            },
          ].map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ What We Do */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="services">
          {[
            { title: "Tech Reviews", icon: "💻" },
            { title: "Travel Diaries", icon: "✈️" },
            { title: "Lifestyle Tips", icon: "🌿" },
            { title: "Coding Tutorials", icon: "👨‍💻" },
          ].map((item, i) => (
            <div className="service-card" key={i}>
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ Achievements with Animated Counter */}
      <section className="achievements" ref={counterRef}>
        <h2>Our Achievements</h2>
        <div className="counter-grid">
          <div className="counter-box">
            {inView && <CountUp end={100} duration={3} suffix="K+" />}
            <p>Readers</p>
          </div>
          <div className="counter-box">
            {inView && <CountUp end={50} duration={3} suffix="+" />}
            <p>Published Articles</p>
          </div>
          <div className="counter-box">
            {inView && <CountUp end={10} duration={3} suffix="+" />}
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* 6️⃣ Testimonials */}
      <section className="testimonials">
        <h2>What Our Readers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “I love reading their travel blogs! The writing feels personal and inspiring.”
            </p>
            <h4>– Sneha Kapoor</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Tech reviews here are detailed and unbiased. My go-to source before any purchase!”
            </p>
            <h4>– Rohit Mehta</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

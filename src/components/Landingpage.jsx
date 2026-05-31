import React, { useState } from "react";

import "./Landingpage.css";

import logo from "./logo.png";

import mobileBg from "./mobile-bg.jpg";



import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpg";

const Home = () => {
const [menuOpen, setMenuOpen] = useState(false);

const heroImages = [img1, img2, img3];
const [currentImage, setCurrentImage] = useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="home">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} className="logoimg" />
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              HOME
            </a>
          </li>

          <li>
            <a href="#courses" onClick={() => setMenuOpen(false)}>
              COURSES
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </a>
          </li>

          <li>
            <button
              className="mobileEnrollBtn"
              onClick={() => setMenuOpen(false)}
            >
              Enroll Now
            </button>
          </li>
        </ul>
      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="hero" id="home">
{/* Desktop Background */}
<img
  src={heroImages[currentImage]}
  alt="Desktop Background"
  className="backgroundimg desktopBg changingBg"
/>

  {/* Mobile Background */}
  <img
    src={mobileBg}
    alt="Mobile Background"
    className="backgroundimg mobileBg"
  />

        <div className="heroContent">
          <h1>
            Build Your Career In
            <span> Medical Sciences</span>
          </h1>

          <p>
            Join Prime Code AI Medical Coding Institute and gain industry-focused medical education
            with expert faculty, practical training, and placement support.
          </p>

          <div className="heroButtons">
            <button className="firstbtn">Explore Courses</button>
            <button className="secondaryBtn">
              Contact Us
            </button>
          </div>
            {/* <img
    src={mobileHeroImg}
    alt="Medical AI"
    className="mobileHeroImage"
  /> */}
        </div>
      </section>

      {/* =========================
          COURSES SECTION
      ========================= */}
      
      <section className="courses" id="courses">
        <h2>Our Training Programs</h2>

        <div className="courseCards">

          <div className="card">
            <h3>Medical Coding Basic Training</h3>
            <p>
              Learn ICD-10-CM, CPT, HCPCS coding fundamentals and healthcare documentation.
            </p>
          </div>

          <div className="card">
            <h3>CDI Training</h3>
            <p>
              Clinical Documentation Improvement training for accurate medical records and coding.
            </p>
          </div>

          <div className="card">
            <h3>IPDRG Training</h3>
            <p>
              Inpatient DRG coding and reimbursement methodologies with real-world case studies.
            </p>
          </div>

          <div className="card">
            <h3>E&M Training</h3>
            <p>
              Evaluation and Management coding guidelines for physician and hospital services.
            </p>
          </div>

          <div className="card">
            <h3>ED Coding</h3>
            <p>
              Emergency Department coding and documentation practices for healthcare professionals.
            </p>
          </div>

          <div className="card">
            <h3>HCC Training</h3>
            <p>
              Hierarchical Condition Category coding for risk adjustment and compliance.
            </p>
          </div>

          <div className="card">
            <h3>CCS Certification Training</h3>
            <p>
              Comprehensive preparation for Certified Coding Specialist certification exams.
            </p>
          </div>

          <div className="card">
            <h3>CDIP Certification Training</h3>
            <p>
              Expert preparation for Certified Documentation Integrity Practitioner certification.
            </p>
          </div>
          <div className="card">
            <h3>Medical Billing Training</h3>
            <p>
            Learn healthcare reimbursement processes, insurance claims management, payment posting, and revenue cycle management.
            </p>
        </div>

        </div>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <section className="about" id="about">
        <div className="aboutContent">
          <h2>About Prime Code AI Medical Coding Institute</h2>

          <p>
            Prime Code AI Medical Coding Institute is committed to providing
            high-quality medical coding education and professional training.
            Our mission is to prepare students for successful careers in the
            healthcare industry through practical learning, real-time projects,
            and industry exposure.
          </p>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section className="whyUs">
        <h2>Why Choose Prime Code AI Medical Coding Institute?</h2>

        <div className="features">

          <div className="feature">
            <h3>Expert Faculty</h3>
            <p>
              Experienced healthcare professionals.
            </p>
          </div>

          <div className="feature">
            <h3>Practical Training</h3>
            <p>
              Hands-on learning with real-world exposure.
            </p>
          </div>

          <div className="feature">
            <h3>Placement Support</h3>
            <p>
              Career guidance and job assistance.
            </p>
          </div>

          <div className="feature">
            <h3>Modern Infrastructure</h3>
            <p>
              Advanced classrooms and lab facilities.
            </p>
          </div>
          <div className="feature">
            <h3>Industry-Oriented Curriculum</h3>
            <p>
                Updated training modules aligned with current healthcare and medical coding industry standards.
            </p>
          </div>

          <div className="feature">
          <h3>Certification Guidance</h3>
          <p>
          Dedicated support and preparation for CCS, CDIP, CPC, and other professional certification exams.
          </p>
          </div>

        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}
     <section className="contact" id="contact">
  <div className="contactContainer">

    <div className="contactInfo">
      <h2>Get In Touch</h2>

      <p>
        Ready to start your Medical Coding career? Contact us today for
        course details, admissions, and career guidance.
      </p>

      <div className="contactDetails">
        <div className="detail">
          <span>📍</span>
          <p>
            kukatpally, 
            Hyderabad, Telangana - 500072
          </p>
        </div>

        <div className="detail">
          <span>📞</span>
          <p>+91 8096889967</p>
        </div>

        <div className="detail">
          <span>✉️</span>
          <p>info@primecodeaimedicalcodinginstitute.in</p>
        </div>
      </div>
    </div>

    <div className="contactForm">
      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>
      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <p>
          © 2026 Prime Code AI Medical Coding Institute. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;
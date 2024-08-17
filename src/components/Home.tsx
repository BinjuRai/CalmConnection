import React from 'react';
import './Home.css';
import Footer from './Footer';
import imageH2 from "../assets/imageH2.png";
import imageH3 from "../assets/imageH3.png";
import imageH4 from "../assets/imageH4.png";
import imageH6 from "../assets/imageH6.png";

const Home: React.FC = () => {
  
  return (
    <div className="home-page">
      <section className="intro">
        <h2>Are you looking for a way to let go of anger, anxiety or depression?</h2>
        <button className="appointment-button">Book An Appointment</button>
      </section>

      <section className="concerns">
        <h3>What’s concerning you?</h3>
        <p>Are you looking for help? Select from the areas beneath or peruse the full rundown to study every point and the different roads for help.</p>
        <div className="concern-buttons">
          <button>ADHD</button>
          <button>Anxiety</button>
          <button>Depression</button>
          <button>Alcoholism</button>
          <button>Attachment disorder</button>
          <button>Trauma/PTSD</button>
        </div>
      </section>

      <section className="help-section">
        <div className="help-item">
          <img src={imageH2} alt="Therapy" />
        </div>
        <div className="help-item">
          <img src={imageH3} alt="Meditation" />
        </div>
        <div className="help-item">
          <img src={imageH4} alt="Relaxation" />
        </div>
      </section>

      <section className="services">
        <div className="method-used">
          <h3>Method used:</h3>
          <p>CBT</p>
          <p>DBT</p>
        </div>
        <div className="we-help-with">
          <h3>We Help With:</h3>
          <p>Depression</p>
          <p>Trauma</p>
          <p>Anxiety</p>
          <p>Autism</p>
          <p>ADHD</p>
          <p>Parenting Challenges</p>
          <p>Anger Management</p>
          <p>Pre-teen/teen stage of life issues</p>
          <p>And More</p>
        </div>
        <div className="we-offer">
          <h3>We offer:</h3>
          <p>Individual Therapy</p>
          <p>Talk therapy</p>
          <p>Art Therapy</p>
          <p>Music therapy</p>
          <p>Couple therapy</p>
        </div>
      </section>
      
      <section className="mental">
        <div className="help-item">
          <img src={imageH6} alt="Therapy" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

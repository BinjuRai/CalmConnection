import React from 'react';
import './App.css';  // Assuming the CSS file is named App.css

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Basic Terms</h1>
      </header>

      <section className="info-section">
        <div className="term">
          <h2>Anxiety</h2>
          <p>Anxiety: Feeling very worried, tense, or afraid about things that might happen.</p>
        </div>
        <div className="term">
          <h2>Attack</h2>
          <p>Attack: A sudden short period of bad but usually mild symptoms like confusion, sadness, or panic that doesn't require medical attention.</p>
        </div>
        {/* Add more terms here */}
      </section>

      <section className="infographic-section">
        <img src="infographic.png" alt="What therapy actually is" className="infographic"/>
      </section>

      <section className="breathwork-section">
        <img src="breathwork.png" alt="Breath Work" className="breathwork-img"/>
      </section>

      <section className="details-section">
        <p>Attending therapy...</p>
        {/* Add the rest of the text content here */}
      </section>

      <button className="cta-button">Book An Appointment</button>
    </div>
  );
};

export default App;

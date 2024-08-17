import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions:</h1>

      <div className="faq-section">
        <div className="faq-item">
          <h2>How long can I expect the sessions to be?</h2>
          <p>
            Ans: A typical psychotherapy session lasts for 45-50 minutes,
            depending on the therapist. The time frame can be extended
            between 10 to 14 sessions, varying on the client’s needs.
          </p>
        </div>

        <div className="faq-item">
          <img src="/path/to/image1.png" alt="Online counseling" />
          <h2>Is online counseling right for me?</h2>
          <p>
            Ans: Although there are many advantages of online counseling like
            convenience, flexibility, and a safe place from external
            environments such as COVID-19, it's important to consider that
            online sessions may not be right for everyone. If you find it
            challenging to express your feelings via video calls, or if you
            are uncomfortable using technology, an in-person session may be
            better suited.
          </p>
        </div>

        <div className="faq-item">
          <img src="/path/to/image2.png" alt="First session" />
          <h2>What happens during the first session?</h2>
          <p>
            Ans: The first session is the time for you to start to share your
            concerns, and for me to get a sense of what brings you to therapy.
            Another important aspect of the first session is building trust.
            We will spend time understanding what is troubling you and what
            goals you may have for therapy. Once we have discussed this
            together, we will begin to figure out some goals which I will help
            to figure out how to help you get there.
          </p>
        </div>

        <div className="faq-item">
          <img src="/path/to/image3.png" alt="Session frequency" />
          <h2>How often will we meet?</h2>
          <p>
            Ans: To begin, we will meet once a week. I find it important to
            gain some momentum in the beginning by meeting weekly as progress
            is made. Once we have set all of your goals and created, meeting
            less often will make sense.
          </p>
        </div>

        <div className="faq-item">
          <h2>What forms of payment do you take?</h2>
          <p>
            Ans: We take online, cash and bank transfers as well.
          </p>
        </div>
      </div>

      <button className="appointment-button">Book An Appointment</button>
    </div>
  );
};

export default FAQ;

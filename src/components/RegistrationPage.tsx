import React from 'react';
import './RegistrationPage.css';
import registrationImg from "../assets/RegistrationImg.png";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-form">
          <h2>Registration</h2>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="contact">Contact</label>
            <input type="text" id="contact" name="contact" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
            
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="register-image">
          <img src={registrationImg} alt="Registration Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Register;

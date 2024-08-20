import React from 'react';
import './LoginPage.css';
import loginimage from "../assets/loginimage.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src={loginimage} alt="Login Illustration" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit">Login</button>
          </form>
          <p>
            <a href="/register">Create your own account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <button type="submit" className="signup-button">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;


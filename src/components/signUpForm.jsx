import React, { useState } from "react";
import "../styles/signUpForm.css";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      alert("Form submitted with email: " + email);
    } else {
      alert("Please enter a valid email address.");
    }
  };
  return (
    <div className="signUp-container">
      <div className="form-group">
        <h2 className="signUp">Sign Up Page</h2>
        <form>
          <label htmlFor="fullName">Full Name</label>
          <input
            placeholder="Full Name"
            type="text"
            id="fullName"
            name="fullName"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter yur email."
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && (
            <p className="error">Please enter a valid email address.</p>
          )}
          <br />
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="email"
            required
          />{" "}
          <br />
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input
            placeholder="confirm-password"
            type="password"
            id="confirm-pass"
            name="email"
            required
          />
        </form>
      </div>{" "}
      <br />
    </div>
  );
}

export default SignUpForm;

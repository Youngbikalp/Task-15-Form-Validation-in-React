import React, { useState } from "react";
import "../styles/signUpForm.css";
function SignUpForm() {
  const [errors, setErrors] = useState("");
  return (
    <div className="signUp-container">
      <div className="form-group">
        <h2 className="signUp">Sign Up Page</h2>
        <form>
          <label for="fullName">Full Name</label>
          <input
            placeholder="Full Name"
            type="text"
            id="fullName"
            name="fullName"
            
          />
          <div fullname="errors">
            Your need to enter your full name!
          </div>

          <br />
          <label for="email">Email</label>
          <input placeholder="Email" type="email" id="email" name="email" />
          <br />
          <label for="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="email"
          />
          <br />
          <label for="confirm-pass">Confirm Password</label>
          <input
            placeholder="confirm-password"
            type="password"
            id="confirm-pass"
            name="email"

          />
        </form>
      </div>
      <br />
    </div>
  );
}

export default SignUpForm;

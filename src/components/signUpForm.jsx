import React from "react";
import "../styles/signUpForm.css";
function SignUpForm() {
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
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            required
          />
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

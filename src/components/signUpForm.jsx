import React, { useState } from "react";
import "../styles/signUpForm.css";
function SignUpForm() {
  const [values, setValues] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  //taking an event object as a parameter
  const handleInput = (e) => {
    const { name, value } = e.target;

    //{...values} is a spread operator which creates a new object
    //by taking all the properties from "values" which is the current state

    //e.target.name is referring to the input field name
    //when onChange event is triggered and handleInput function is called
    //e.target.name within handleInput will be whatever triggered it
    setValues({ ...values, [name]: value });
  };

  function validation() {
    let error = {};
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (values.password === "") {
      error.password = "Password field cannot be empty.";
    } else if (!passwordPattern.test(values.password)) {
      error.password =
        "Your password must be at least 8 minimum characters and " +
        "contain 1 upper case, number and special character.";
    }

    if (
      values.confirmPassword === "" ||
      values.confirmPassword !== values.password
    ) {
      error.confirmPassword = "Your password does not match";
    }

    return error;
  }

  function handleValidation(e) {
    e.preventDefault();
    const validateError = validation();
    setErrors(validateError);
  }

  return (
    <div className="signUp-container">
      <div className="form-group">
        <h2 className="signUp">Sign Up Page</h2>
        <form onSubmit={handleValidation} noValidate>
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
            onChange={handleInput}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            required
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <br />
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input
            onChange={handleInput}
            placeholder="Confirm Password"
            type="password"
            id="confirm-pass"
            name="confirmPassword"
            required
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
          <div>
            <button>SignUp</button>
          </div>
        </form>
      </div>{" "}
      <br />
    </div>
  );
}

export default SignUpForm;

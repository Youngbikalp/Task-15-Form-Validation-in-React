import React, { useState } from "react";
import "../styles/signUpForm.css";
function SignUpForm() {
  const [errors, setErrors] = useState({});
  const [stateName, setStateName] = useState({fullName: ""})
  const handleInput = (e) => {
    setStateName({...stateName, [e.target.name] : e.target.value})

  }
  function formSubmit(e) {
    e.preventDefault() 
    setErrors(formValidation()) 
    
  } 
  function formValidation() {

    let error = {}
    if(stateName.fullName === "") {
      error.fullName="name field cannot be empty"
    }

  }
  return (
    <div className="signUp-container">
      <div className="form-group">
        <h2 className="signUp">Sign Up Page</h2>
        <form onSubmit={formSubmit}>
          <label for="fullName">Full Name</label>
          <input
          onChange ={handleInput}
            placeholder="Full Name"
            type="text"
            id="fullName"
            name="fullName"
            
          />
        
        {errors.fullName && <p>{errors.fullName}</p>}

          

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
          <button>SignUp</button>
        </form>
      </div>
      <br />
    </div>
  );
}

export default SignUpForm;

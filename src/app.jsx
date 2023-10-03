import { useState } from "react";
import "./app.css";
import SignUpForm from "./components/signUpForm";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <SignUpForm />
    </div>
  );
}

export default App;

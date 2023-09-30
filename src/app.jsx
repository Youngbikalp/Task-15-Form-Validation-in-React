import { useState } from "react";
import "./app.css";
import Header from "./components/header";
import SignUpForm from "./components/signUpForm";

function App() {
  return (
    <div>
      <Header />
      <SignUpForm />
    </div>
  );
}

export default App;

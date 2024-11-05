import "./App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const [firstUsername, setFirstUsername] = useState("");
  const [lastUsername, setLastUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/homes");
    }

    fetch('http://localhost:8000') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [navigate]);

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission
    const data = { firstUsername, lastUsername, password, email };
    console.log(data);
    
    axios.post('http://localhost:8000/signup', data)
      .then(response => {
        console.log('User signed up', response.data);
      })
      .catch(error => {
        console.error('Error signing up', error);
      });
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex-container">
      <div className="signup-nav">
        {/* <h1>pulse</h1> */}
      </div>
      <div className="details-login">
        <form className="flex-login" onSubmit={handleSignUp}>
          <div className="pulse">
            <h1 data-text="WELCOME TO PULSE "> WELCOME TO PULSE </h1>
          </div>
          <div className="user-container">
            <div className="user">
              <input
                type="text"
                placeholder="First Name"
                value={firstUsername}
                onChange={(e) => setFirstUsername(e.target.value)}
                required
              />
            </div>
            <div className="user">
              <input
                type="text"
                placeholder="Last Name"
                value={lastUsername}
                onChange={(e) => setLastUsername(e.target.value)}
                required
              />
            </div>
            <div className="user">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="user">
              <input
                type="password"
                placeholder="Confirm Password"
                value={authPass}
                onChange={(e) => setAuthPass(e.target.value)}
                required
              />
            </div>
            <div className="user">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signup-btn">
            <button type="submit" className="signup-btn1">
              Sign Up
            </button>
          </div>
          <div className="signup-btn">
            <div className="login-signin-container">
              <p>Already have an account?</p>
              <div className="signup-btn2" onClick={() => handleMenuClick("/login")}>
                Login
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

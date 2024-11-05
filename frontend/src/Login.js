import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/token', new URLSearchParams({
          username: username,
          password: password,
      }), {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
      });
      setMessage(`Logged in as: ${response.data.access_token}`);
    } catch (error) {
      setMessage('Login failed: ' + error.response?.data?.error || error.message);
    }
  };

  const handleMenuClick = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
    // Implement navigation logic if needed
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
    // Add Google sign-in logic here
  };

  const handleOutlookSignIn = () => {
    console.log("Signing in with Outlook...");
    // Add Outlook sign-in logic here
  };

  return (
    <div className="flex-container">
      <div className="signup-nav"></div>
      <div className="details-login">
        <form className="flex-login" onSubmit={handleSubmit}>
          <div className="pulse">
            <h1 data-text="WELCOME TO TESTS "> WELCOME TO TESTS</h1>
          </div>
          <div className="user-container">
            <div className="user">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="user">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-with">
            <p>Or login with</p>
          </div>
          <div className="signup-btn">
            <button
              type="button"
              className="email-integration-2"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
            <button
              type="button"
              className="email-integration-3"
              onClick={handleOutlookSignIn}
            >
              Sign in with Outlook
            </button>
            <button type="submit" className="signup-btn1">Login</button>
            <div className="login-signin-container">
              <p>Don't have an account?</p>
              <div
                className="signup-btn2"
                onClick={() => handleMenuClick("/")}
              >
                Signup Now
              </div>
            </div>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;

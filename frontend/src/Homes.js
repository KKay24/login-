
import './App.css';

function Homes() {
  return (
    <div className="flex-container">
      <div className="signup-nav"></div>
      <div className="details-login">
        <form className="flex-login">
          <div className="pulse">
            <h1 data-text="WELCOME TO HOME "> WELCOME TO HOME</h1>
          </div>
          <div className="user-container">
            <div className="user">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={''}
                required
              />
            </div>
            <div className="user">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={''}
                required
              />
            </div>
          </div>
         
          <div className="signup-btn">
            <h1>this is a test</h1>
            <h2>kabwe</h2>
            <h3>kabwe</h3>
            <div className="login-signin-container">
              <p>Don't have an account?</p>
              <div
                className="signup-btn2"
              >
                Signup Now
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homes;

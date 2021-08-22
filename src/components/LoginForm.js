import React, { useState } from "react";
import "../css/loginform.css";

const LoginForm = () => {
  const [signUpMode, setSignUpMode] = useState();

  return (
    <div className="form-body">
      <div className={`main-form-container ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <img
                className="img-top"
                src="https://www.iconpacks.net/icons/2/free-user-login-icon-3057-thumb.png"
                alt="login-image"
              />
              <h2 className="form-title">Sign in</h2>
              <div className="input-field">
                <i className="fa fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="butn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <img
                className="img-top"
                src="https://www.iconpacks.net/icons/2/free-user-signup-icon-3058-thumb.png"
                alt="signup-image"
              />
              <h2 className="form-title">Sign up</h2>
              <div className="input-field">
                <i className="fa fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="butn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Don't have an account?</h3>
              <p>
                  Click the below button to create a new account
              </p>
              <button
                className="butn transparent"
                id="sign-up-butn"
                onClick={() => setSignUpMode(true)}
              >
                Sign up
              </button>
            </div>
            <img src="signup.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Have an account?</h3>
              <p>
                  Click the below button to log in to your account
              </p>
              <button
                className="butn transparent"
                id="sign-in-butn"
                onClick={() => setSignUpMode(false)}
              >
                Sign in
              </button>
            </div>
            <img src="login.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

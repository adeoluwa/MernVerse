import React from 'react';

import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MernVerse</h3>
          <span className="loginDesc">Connect with MernVerse</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" className="loginInput" placeholder="Email" />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

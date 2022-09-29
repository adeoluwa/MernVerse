import React from 'react'

import './register.css'

const Register = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MernVerse</h3>
          <span className="loginDesc">Connect with MernVerse</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input
              type="Email"
              className="loginInput"
              placeholder="Email"
            />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="Password"
              className="loginInput"
              placeholder="Confirm Password"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log Into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
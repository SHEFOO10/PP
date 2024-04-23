import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { login } from '../API.js'
const Login = ({setLoggedIn, setUserInfo}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    }


    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      return;
    }
    alert('send to backend')
    const response = await login({email: email, password: password})

    if (response.success){
      setLoggedIn(true)
      setUserInfo(response.msg)
    } else {
      alert(response.msg)
    }
    
  };

  return (
    <div className="SignupContainer">
      <h2>Login</h2>
      <form className="LoginForm">
        <div className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
          <span className="errorLabel">{emailError}</span>
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
          <span className="errorLabel">{passwordError}</span>
        </div>
        <div className="inputContainer">
          <button type="button" className="loginButton" onClick={handleLogin}>
            Log in
          </button>
        </div>
        <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
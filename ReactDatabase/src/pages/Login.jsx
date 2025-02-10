import React, { useState } from 'react';
import '../pages/Login.css';
import logo from "../assets/logo.svg";
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'Randy' && password === 'frogsarecool') {
      onLogin(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Welcome back!</h1>
      <p className="account">Log into your account below</p>
      <section className="maincontainer">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </form>
          <button type="submit" className="login-button">Login</button>
      <p className='create'>create an account</p>
      </section>
    </div>
  );
};

export default LoginPage;
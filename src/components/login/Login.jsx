import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './Login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to a server
    console.log('Submitted:', { email, password });
  };

  return (
    <div className='login-container-main'>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group" style={{color:"white"}}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{color:"white"}}>
            <label htmlFor="password">Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          <button className='Login-btn' type="submit">Login</button>
          <p style={{color: "white",marginTop:"10px"}}>Don't have an account? <Link to="/category/register" style={{ textDecoration: 'none', color: 'inherit' }}>Create one</Link>.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

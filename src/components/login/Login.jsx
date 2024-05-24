import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './Login.css';

const API_URL = 'https://rategle-login-register-db.onrender.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      console.log('Login Successful:', response.data);

      // Set JWT token in cookie
      Cookies.set('jwt', response.data.token, { expires: 365 * 24 * 60 * 60 });

      // Display alert for successful login
      alert('Login successful!');
      window.location.href = '/';
      // Handle successful login, such as redirecting the user
    } catch (error) {
      console.error('Login Failed:', error.response.data);
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <div className='login-container-main'>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
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
          {error && <p className="error-message">{error}</p>}
          <button className='Login-btn' type="submit">Login</button>
          <p>Don't have an account? <Link to="/category/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register here</Link>.</p>
        </form>
      </div>
      {loading && (
        <div className="loading-overlay">
          <ClipLoader color={'#123abc'} loading={loading} size={150} />
        </div>
      )}
    </div>
  );
};

export default Login;

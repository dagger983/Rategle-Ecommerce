import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Cookies from 'js-cookie'; // Import Cookies for managing cookies
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { ClipLoader } from 'react-spinners'; // Import ClipLoader for loading spinner
import './Login.css'; // Import your CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const API_URL = 'https://rategle-login-register-db.onrender.com';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password, confirmPassword });
      console.log('Registration Successful:', response.data);
      Cookies.set('jwt', response.data.token, { expires: 365 * 24 * 60 * 60 });
      setSuccess(true);
    } catch (error) {
      console.error('Registration Failed:', error);
      setError('Registration failed. Please try again.'); // Set a generic error message
    }
    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        window.alert('Registration successful! You will now be redirected to login.');
        window.location.href = '/category/login';
      }, 1000);
    }
  }, [success]);

  return (
    <div className='login-container-main'>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group" style={{color:"black"}}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{color:"black"}}>
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
          <div className="form-group" style={{color:"black"}}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {showConfirmPassword ? (
                <FaEyeSlash
                  className="password-toggle-icon"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <FaEye
                  className="password-toggle-icon"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message if registration fails */}
          <button className='Login-btn' type="submit">Register</button>
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

export default Register;

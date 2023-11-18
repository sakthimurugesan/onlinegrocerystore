import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate email
    if (!emailIsValid(email)) {
      toast.error('Invalid email address', { position: 'top-center' });
      return;
    }

    // Validate password length
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long', { position: 'top-center' });
      return;
    }

    // Validate password complexity
    if (!passwordIsValid(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number', { position: 'top-center' });
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match', { position: 'top-center' });
      return;
    }

    // Your registration logic goes here

    // Redirect to login page after successful registration
    navigate('/login');
  };

  const emailIsValid = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const passwordIsValid = (password) => {
    // Password complexity validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <Navbar />
      <div className="login-div">
        <div className="login-div-1">
          <div className="login-img-div">
            <center>
              <img height={150} width={150} className="login-img" src="profile.png" alt="Profile" />
            </center>
          </div>
          <div className="login-form-div">
            <form onSubmit={handleRegister}>
              <label htmlFor="e-mail">E-mail</label> <br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="e-mail" placeholder="Enter your email" /> <br />
              <label htmlFor="password">Password</label> <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" /> <br />
              <label id="confirmPassword" htmlFor="password-1">Confirm Password</label> <br />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="password-1" placeholder="Enter your password again" /> <br />
              <button id="submit-btn" type="submit">Register</button>
            </form>
          </div>
        </div>

        <center> Existing User? <a href="/login">Login</a></center>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

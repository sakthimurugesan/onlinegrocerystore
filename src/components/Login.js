// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRef } from 'react';
import { useUser } from './UserContext';
import { ToastContainer, toast } from 'react-toastify'; // Import toast

function Login() {
  const navigate = useNavigate();
  const userNameRef = useRef(null);
  const { loginUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;

    if (userName) {
      loginUser(userName);
      navigate('/');

      // Display a success toast on successful login
      toast.success(`Welcome back, ${userName}!`, { position: "top-center" });
    } else {
      // Display an error toast if the user didn't enter an email
      toast.error('Please enter your email!', { position: "top-center" });
    }
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="e-mail">E-mail</label> <br></br>
              <input type="email" ref={userNameRef} id="e-mail" placeholder="Enter your email" /> <br></br>
              <label htmlFor="password">Password</label> <br></br>
              <input type="password" id="password" placeholder="Enter your password" /> <br></br>
              <button id="submit-btn" type="submit">Login</button>
            </form>
          </div>
        </div>

        <center> New User? <a href="/register">Register</a></center>
      </div>
      
      <Footer />
    </div>
  );
}

export default Login;

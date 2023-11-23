import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from './components/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const PrivateRoute = ({ element, ...props }) => {
  const { user } = useUser();

  // Check if the user is authenticated
  if (!user) {
    // If not, redirect to the login page
    alert("Login to access cart")
    return <Navigate to="/login" />;
  }

  // If authenticated, render the provided element
  return <Route {...props} element={element} />;
};

export default PrivateRoute;

// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from './components/UserContext';
import TextAxios from './components/TestAxios';
const PrivateRoute = ({ element, ...props }) => {
  const { user } = useUser();

  if (!user) {
   alert('User not authenticated. Redirecting to /login');
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  if(user.email!="admin@gmail.com")
  {
    alert('Login with admin account');
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the provided element or Cart component
  return element || <TextAxios />;
};

export default PrivateRoute;

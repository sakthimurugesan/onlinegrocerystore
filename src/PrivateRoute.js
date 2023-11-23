// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from './components/UserContext';
import TestAxios from './components/TestAxios';
const PrivateRoute = ({ element, ...props }) => {
  const { user } = useUser();

  if (!user) {
   alert('User not authenticated. Redirecting to /login');
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the provided element or Cart component
  return element || <TestAxios />;
};

export default PrivateRoute;

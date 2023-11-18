// Logout.js
import React from 'react';
import { useUser } from './UserContext';
import { toast } from 'react-toastify';

function Logout() {
  const { logoutUser } = useUser();

  const handleLogout = () => {
    toast.error(`Logged Out`, { position: "top-center" });
    logoutUser();
  };

  return (
    <a onClick={handleLogout}>Logout</a>
  );
}

export default Logout;
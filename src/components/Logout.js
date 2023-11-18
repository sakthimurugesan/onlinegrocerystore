// Logout.js
import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import { toast } from 'react-toastify';

function Logout() {
  const { logoutUser } = useUser();

  useEffect(() => {
    const handleLogout = async () => {
      toast.success(`Logged Out`, { position: "top-center" });
      await logoutUser();
      toast.dismiss(); // Dismiss the toast after logout
    };

    handleLogout();
  }, [logoutUser]);

  return null; // No need to render anything, as the effect handles the logout logic and toast
}

export default Logout;

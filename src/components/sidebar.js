import React from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  const openSidebar = () => {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
    document.getElementById("toggle-btn").innerHTML = "&#9665;";
  };

  const closeSidebar = () => {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    document.getElementById("toggle-btn").innerHTML = "&#9654;";
  };

  return (
    <>
      <div id="sidebar">
        <a href="#" className="close-btn" onClick={closeSidebar}>&#9665;</a>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </div>

      <div id="main-content">
        <span id="toggle-btn" onClick={openSidebar}>&#9654;</span>
      </div>
    </>
  );
}

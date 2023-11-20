// Cart.js
import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
const Cart = () => {
  // Get cart items from local storage
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Function to delete a product from the cart
  const deleteProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Navbar></Navbar>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              {/* Display product image here if available */}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Add a delete button with an onClick handler */}
              <button onClick={() => deleteProduct(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default Cart;

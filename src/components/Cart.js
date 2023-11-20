// Cart.js
import React from 'react';

const Cart = () => {
  // Get cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
             
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

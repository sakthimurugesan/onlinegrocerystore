import React, { useState } from 'react';
import Navbar from './Navbar'
import '../styles/Cart.css'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [serialNumber, setSerialNumber] = useState(1);

  const deleteProduct = (productId) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
  
    if (isConfirmed) {
      // If confirmed, update the cart
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
  
      // Update local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.error("Product deleted")
    }
  };
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <div>
      <Navbar></Navbar>
      <ul>

      </ul>
      <div className="box-1">
        <div className="table-1">
          <div className="row-1 header">
            <div className="cell-1">SNo</div>
            <div className="cell-1">Product Name</div>
            <div className="cell-1">Quantity</div>
            <div className="cell-1">Price</div>
            <div className="cell-1">Total Price</div>
            <div className="cell-1"></div>
          </div>
          {cartItems.map((item, index) => (
            <div className="row-1" key={item.id}>
              <div className="cell-1" data-title="SNo">{serialNumber + index}</div>
              <div className="cell-1" data-title="Product Name">{item.title}</div>
              <div className="cell-1" data-title="Quantity">{item.quantity}</div>
              <div className="cell-1" data-title="Price">$ {item.price.toFixed(2)}</div>
              <div className="cell-1" data-title="Total Price">$ {(item.price * item.quantity).toFixed(2)}</div>
              <div className="cell-1" data-title="Delete">
                <button className='del-btn' onClick={() => deleteProduct(item.id)}>Delete</button>
              </div>
            </div>
          ))}
            <div className='row-1'>
            <div className="cell-1"></div>
            <div className="cell-1"></div>
            <div className="cell-1"></div>
            <div className="cell-1">Total Amount</div>
            <div className="cell-1" style={{
              color:"black"
            }}>${calculateTotalAmount().toFixed(2)}</div>
            <div className="cell-1"><a href='/payment'><button className='chk-btn'>CheckOut</button></a></div>
            </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  );
};

export default Cart;

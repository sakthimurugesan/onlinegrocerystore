import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ fetchData }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 0,
    price: 0,
    type: 'fruit', // Default to 'fruit'
    height: 600,
    width: 401,
    trend: '',
    id: 500,
    filename: '48.jpg',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        title: formData.title,
        description: formData.description,
        rating: formData.rating,
        price: formData.price,
        type: formData.type,
        height: 600,
        width: 401,
        trend: '',
        filename: '48.jpg',
      };

      await axios.post('http://localhost:3001/books', productData);

      alert('Product added successfully');
      navigate('/dashboard');
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    width: '300px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="title" style={labelStyle}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="description" style={labelStyle}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="rating" style={labelStyle}>
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="price" style={labelStyle}>
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="type" style={labelStyle}>
            Category:
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="dairy">Dairy</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="bakery">Bakery</option>
            <option value="vegan">Vegan</option>
            <option value="meat">Meat</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            style={buttonStyle}
            
            
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

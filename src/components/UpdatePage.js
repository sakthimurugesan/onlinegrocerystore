import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    rating: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/books/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/books/${id}`, formData);
      console.log('Item updated successfully');
      navigate('/dashboard');
      // Redirect or perform other actions after successful update
    } catch (error) {
      console.error('Error updating item:', error);
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
      <h1>Update Item</h1>
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
            style={inputStyle}
          />
        </div>
        <div>
          <button
            type="submit"
            style={buttonStyle}
            
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;

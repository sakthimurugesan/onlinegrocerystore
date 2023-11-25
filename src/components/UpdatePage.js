import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';

const UpdatePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    rating: 0,
  });
const navigate=useNavigate()
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
      navigate('/')
      // Redirect or perform other actions after successful update
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Update Item</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestAxios = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateItem = (id, updatedData) => {
    // Set the selected item ID to be used in UpdatePage
    setSelectedItemId(id);
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/books/${id}`);
      console.log('Item deleted:', response.data);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>JSON Data</h1>
      <div className="box-1">
        <div className="table-1">
          <div className="row-1 header">
            <div className="cell-1">SNo</div>
            <div className="cell-1">Product Name</div>
            <div className="cell-1">Price</div>
            <div className="cell-1">Update</div>
            <div className="cell-1">Delete</div>
          </div>

          {data.map((item, index) => (
            <div className="row-1" key={item.id}>
              <div className="cell-1" data-title="SNo">{item.id+1}</div>
              <div className="cell-1" data-title="Product Name">{item.title}</div>
              <div className="cell-1" data-title="Price">$ {item.price}</div>
            
              <div className="cell-1" data-title="Delete">
              <button className='update-btn'><Link to={`/update/${item.id}`}>
                  Update
                </Link></button>
              </div>
              <div className="cell-1" data-title="Delete">
              <button className='del-btn' onClick={() => deleteItem(item.id)}>Delete Item</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href='/addproduct'><button>Add Product</button></a>
    </div>
  );
};

export default TestAxios;

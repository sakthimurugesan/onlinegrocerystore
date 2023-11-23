import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import Footer from './Footer';
import ProductFilter from './ProductFilter';
import ProductSearch from './ProductSearch';

const Shop = () => {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        setProductData(response.data);
        
        // Extract unique categories from the data
        const uniqueCategories = Array.from(new Set(response.data.map((product) => product.type)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setFilters((prevFilters) =>
      prevFilters.includes(category) && category !== 'all'
        ? prevFilters.filter((filter) => filter !== category)
        : [category === 'all' ? 'all' : category]
    );
  };

  return (
    <>
      <NavBar />
      <ProductFilter
        categories={categories}
        onFilterChange={handleFilterChange}
        onSearchChange={setSearchTerm}
      />
      <ProductSearch products={productData} filters={filters} searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default Shop;

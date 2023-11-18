import NavBar from './Navbar';
import Footer from './Footer';
import '../styles/Shop.css';
import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import productData from './products.json';
import ProductSearch from './ProductSearch';

const allCategories = ["all", "dairy", "fruit", "vegetable", "bakery", "vegan", "meat"];

const Shop = () => {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(productData.map((product) => product.type)));

  const handleFilterChange = (category) => {
    setFilters((prevFilters) =>
      prevFilters.includes(category) && category !== 'all'
        ? prevFilters.filter((filter) => filter !== category)
        : [category === 'all' ? "all" : category]
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
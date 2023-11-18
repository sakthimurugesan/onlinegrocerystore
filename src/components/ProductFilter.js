import React from 'react';

const ProductFilter = ({ categories, onFilterChange, onSearchChange }) => {
  return (
    <div>
      <h2>Product Filter</h2>
      <label>
        Search:
        <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
      </label>
      <div>
        <button onClick={() => onFilterChange('all')}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => onFilterChange(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;

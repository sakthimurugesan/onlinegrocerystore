import React from 'react';

const ProductSearch = ({ products, filters, searchTerm }) => {
  // Apply filters and search term
  const filteredProducts = products
    .filter((product) => filters.length === 0 || filters.includes(product.type) || filters.includes('all'))
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h2>Filtered Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.title}>
            <img src={product.filename}></img>
            {product.title} - {product.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
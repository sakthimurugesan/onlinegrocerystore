// ProductList.js
import React from 'react';
import './App.css';
const ProductCard = ({ product }) => (
  <div className="book">
  <p>hi hello how are you i am fine</p>
  <button>Add to card</button>
  <div className="cover">
       <img height={150} src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p className='price'>Price: ${product.price}</p>
  </div>
 </div>
  /*
   <div class="book">
    <button>Add to card</button>
    <div class="cover">
         <img height={150} src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    </div>
   </div>
  */
);

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

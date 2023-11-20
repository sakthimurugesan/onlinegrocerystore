import React from 'react';
import '../styles/ProductSearch.css';
const ProductSearch = ({ products, filters, searchTerm }) => {
  const filteredProducts = products
    .filter((product) => filters.length === 0 || filters.includes(product.type) || filters.includes('all'))
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div style={{ padding: '50px' }}>
      <center>
        <ul className='Products' style={{
          marginTop:"-55px"
        }}>
          {filteredProducts.map((product) => (
            
            <li key={product.title}>
              
              <img src={'./img/' + product.filename} height='300px' width='200px' alt='nil'></img>

               
                <br />
                <p>
                  <b>Product : </b>{product.title} <br />  <b>Price :</b> ${product.price} <br />
                  <b>Rating :</b> {product.rating}/5
                </p>
                <a href={'/shop/product/'+product.id}><button className='but'>Buy</button></a>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default ProductSearch;
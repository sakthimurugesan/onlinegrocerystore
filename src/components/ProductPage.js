import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ProductPage.css';
import productsData from './products.json'; 
const ProductPage = () => {
  // Accessing the id parameter from the URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching filename/id
    const selectedProduct = productsData.find((item) => item.filename[0] == id);

    // Set the product details in the state
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    // Handle the case when the product is not found
    return <p>Product not found</p>;
  }

  const { title, type, price, rating, filename } = product;

  return (
    <>
    <Navbar></Navbar>
    <div className='product-main-div'>
      <div className='product-main-div-1'>
      <div className='product-img-div'>
        <img src={'/img/'+filename}></img>
      </div>
      <div className='product-detail-div'>
        <h1>{title}</h1>
        <h6>Category {type}</h6>
        <h6>Price ${price}</h6>
        <h6>Rating {rating}/5</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet fringilla lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis ullamcorper nibh, eget mattis lectus. Suspendisse potenti. Etiam cursus magna nec urna rutrum consequat. Aenean a faucibus lectus. Nam sit amet ligula et urna imperdiet hendrerit.</p>
      </div>
      </div>
    </div>
    <Footer></Footer>
    </>
     
   
  );
};

export default ProductPage;

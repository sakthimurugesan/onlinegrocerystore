import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Assume you have a Loader component for displaying a loading spinner

const Payment = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);


    const paymentTimeout = setTimeout(() => {
      setPaymentCompleted(true);
    }, 3000);


    const redirectTimeout = setTimeout(() => {
      history('/');
    }, 5000);

    
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(paymentTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [history]);
  localStorage.removeItem('cart');
  return (
    <div>
      {loading && <Loader mess={"Loading"} />} 
      {!loading && paymentCompleted && (
        <>
        <div style={{
          height:"100vh",
          width:"100%",
          display:"flex",
          justifyContent:"center"
          ,alignItems:"center",
          flexDirection:"column"

        }}>
          <h2 style={{ color: 'green', fontSize: '64px' }}>✔</h2>
          <h2>Payment Completed</h2>
          <h1>Redirecting....</h1>
        </div>
        </>
      )}
    </div>
  );
};

export default Payment;

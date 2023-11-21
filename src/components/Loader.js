import React from 'react';
import '../styles/Loader.css'
const Loader = (props) => {
  return (
    <div className='main' style={{ textAlign: 'center', marginTop: '20px' }}>
      <div className="loader"></div>
      <p className='loading'>{props.mess}...</p>
    </div>
  );
};

export default Loader;

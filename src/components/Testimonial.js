import React from "react";

const Testimonial = (props) => {
  return (
    <div
      style={{
        width: "250px" ,
        height: "150px" ,
        backgroundColor: "#fff" ,
        borderRadius: "8px" ,
        boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(0, 0, 0, 0.2)" ,
        padding: "20px" ,
      }}
    >
        <img src='./Asset/p2.jpg' alt="DP" ></img>
        <h3 style={{ display: 'inline' }}>{props.name}</h3>
        <p>
        I am very happy to buy products from GroStore.It has excellent customer
        support which many companies lack it.
        </p>
    </div>
  );
};

export default Testimonial;
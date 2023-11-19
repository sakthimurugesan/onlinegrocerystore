import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background from './pexels-pixabay-147411.jpg'

import Testimonial from "./Testimonial";

export const About1 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <center>
        <p>
          At GroStore, our goal is to make shopping easier, faster, and more
          convenient than ever before for our customers. We are committed in our
          mission to build a trustworthy online marketplace which offers the
          widest range of products across the country. With our proven user
          experience and reliable services, we are committed to provide
          customers in India with a trusted and hassle-free one-stop-shop for
          all their shopping needs across various categories such as
          Electronics, Grocery, Fashion, Home & Kitchen, etc.
        </p>

        <p>
          With our convenient payment options, on time delivery services,
          dependable customer service, and secure online transactions, you can
          now shop smarter, faster and more seamlessly within a few clicks. Our
          commitment to excellence has been recognized worldwide, and we look
          forward to offering our customers a delightful shopping experience
          online with JioMart. #Happy Shopping with JioMart.
        </p>
      </center>
      <section>
        <center>
          <h1 style={{ color: "darkred", fontFamily: "sans-serif" }}>
            Here from our Happy Customers....
          </h1>
        </center>
        <Carousel responsive={responsive} infinite={true}>
          <Testimonial name={'Shalini'} />
          <Testimonial name={'Rakesh'}/>
          <Testimonial name={'Gupta'}/>
          <Testimonial name={'Sita'}/>
        </Carousel>
      </section>
    </div>
  );
};
import '../styles/New.css'
import filteredProducts from './products.json'
export default function New() {
    const trendingProducts = filteredProducts.filter((product) => product.trend === "TRUE");
    return (
        <>
            <section id="one">

                <div class="content">
                    <div class="text-content">
                        <h1 class="white">Fresh Picks Market: Your One-Stop Shop for Quality Groceries
                        </h1>

                        <div class="two-button">

                            <a href='/shop' id='shop-btn' style={{
                                color: "black",
                                textDecoration: "none"
                                
                            }}><button class="t-btn btn">Shop</button></a>
                        </div>

                    </div>
                </div>
            </section>
            <center style={{
                marginTop: '50px'
            }}> <h1>Trending Products</h1></center>
            <div className='trending-pro-div-main'>

                <div className='trending-pro-div'>

                    <div className='Products'>
                        {trendingProducts.map((product) => (

                            <div className='product-div' key={product.title}>

                                <img src={'./img/' + product.filename} height='300px' width='200px' alt='nil'></img>


                                <br />
                                <p>
                                    <b>Product : </b>{product.title} <br />  <b>Price :</b> ${product.price} <br />
                                    <b>Rating :</b> {product.rating}/5
                                </p>
                                <a href={'/shop/product/' + product.filename[0]}><button className='but'>Buy</button></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <center><h1>What's Cooking</h1></center>
            <div className='cooking-main-div'>
                <div className='cooking-card-div'>
                    <div className='cooking-card'>
                        <img src="TheSupreme.jpeg"></img>
                        <a href='#'><h6>TheSupreme</h6></a>
                    </div>
                    <div className='cooking-card'>
                        <img src="SeafoodCocktails.png"></img>
                        <a href='#'><h6>Sea food Cocktails</h6></a>
                    </div>
                    <div className='cooking-card'>
                        <img src="MaitakeMushrooms.jpeg"></img>
                        <a href='#'><h6>Maitake Mushrooms</h6></a>
                    </div>
                    <div className='cooking-card'>
                        <img src="FruityCoffees.jpeg"></img>
                        <a href='#'><h6>Fruity Coffees</h6></a>
                    </div>


                </div>
            </div>
            <section id="one-half" class="goblack">
                <span><img src="p12.jpg" alt="" /></span>

                <div class="half-content">
                    <div class="half__text">
                        <h1>About Us</h1>
                        <p>Sustainability is at the core of our values. We strive to make responsible choices in sourcing products, reducing our environmental footprint, and supporting local farmers and producers. Our commitment to eco-friendly practices extends to our packaging and waste management initiatives.</p>
                    </div>
                    <div class="half__boxes">
                        <div class="box">
                            <span href="#"><i class="fas fa-paw logo"></i></span>
                            <h2>Our Mission</h2>
                            <p>Empowering Communities Through Freshness: Our Mission is to Provide Accessible, High-Quality, and Sustainably Sourced Groceries, Nurturing Health, Well-being, and Culinary Joy in Every Home.</p>
                        </div>
                        <div class="box">
                            <span href="#"><i class="fas fa-paw logo"></i></span>
                            <h2>Our Vision</h2>
                            <p>Transforming Lives Through Nourishment: Our Vision is to Be the Premier Grocery Destination, Fostering Healthy Lifestyles, Sustainable Practices, and Enriching Connections Within Every Community We Serve</p>
                        </div>
                    </div>
                </div>

            </section>


            <section id="two">
                <div class="heading ">
                    <h1>What We Offer</h1>
                    <p class="lightblack">
                        We are looking ahead to satisfy out customer the atmost. We are happy to help people to find right products for people to lead a Healthy and Sustainable life
                    </p>

                </div>


                <div class="container">
                    <div class="info">
                        <span><img style={{
                            objectFit: 'cover'
                            , borderRadius: "8px"
                        }} src="delivery (2).jpg" alt="" /></span>
                        <div class="info__text">
                            <h1>Delivery</h1>

                            <p>From our store to your door, we're dedicated to delivering freshness with every order</p>
                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                    <div class="info">
                        <span><img src="payment.jpeg" style={{
                            objectFit: 'cover'
                            , borderRadius: "8px"
                        }} alt="" /></span>
                        <div class="info__text">
                            <h1>Hassle Free Payment</h1>

                            <p>Seamless transactions, happy customers. Pay with ease and shop with peace of mind</p>

                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                    <div class="info">
                        <span><img src="customer1.jpg" style={{
                            objectFit: 'cover',
                            objectPosition: '0px'
                            , borderRadius: "8px"
                        }} alt="" /></span>
                        <div class="info__text">
                            <h1>Customer Support</h1>

                            <p>Service with a smile, support with sincerity. Your satisfaction is our success</p>

                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                </div>

            </section>


            <section id="four" class="goblack">
                <article>
                    <h1>Happy Customers</h1>
                    <p>Happy Customer, Happy Us! Your satisfaction is our greatest reward. Thank you for choosing us and allowing us to be a part of your journey to culinary joy and well-being</p>

                    <p>Thrilled to have you as a happy customer! Your satisfaction fuels our commitment to excellence.</p>

                    <div class="article__icon">
                        <div class="customer__info">
                            <span><i class="fas fa-user-plus"></i> 100K+</span>
                            <pre>         Customers</pre>
                        </div>

                        <div class="customer__info">
                            <span><i class="fas fa-thumbs-up"></i> 100%</span>
                            <pre>        Satisfaction</pre>
                        </div>
                    </div>
                </article>

                <div class="four__info">
                    <div class="some__info">

                        <div class="four__text">

                            <p>
                                From the freshest produce to friendly staff, every visit is a delight. The convenience of online ordering and prompt delivery makes this my go-to grocery destination. A five-star experience that keeps me coming back for more!
                                "
                            </p>

                            <h4>Mario Spe</h4>
                        </div>
                    </div>

                    <div class="some__info">

                        <div class="four__text">

                            <p>
                                The selection is diverse, the staff is incredibly helpful, and the commitment to sustainability is commendable. They've turned grocery shopping into an enjoyable experience. Highly recommended!
                            </p>
                            <h4>Petey Cru</h4>
                        </div>
                    </div>

                </div>

            </section>



            <section id="six">
                <h5>Grocery Store</h5>
                <h1>Our Team Is Filled With Highly Dedicated Staff</h1>



            </section>

        </>
    )
}
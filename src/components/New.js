import '../styles/New.css'
import filteredProducts from './products.json'
export default function New() {
    const trendingProducts = filteredProducts.filter((product) => product.trend === "true");
    return (
        <>
            <section id="one">



                <div class="content">
                    <div class="text-content">
                        <h1 class="white">Providing Special care
                            For <strong>Your Pets!</strong>
                        </h1>
                        <h4 class="blackish">We offer special services for special pets!</h4>
                        <div class="two-button">
                            <button class="w-btn btn">View Our Services</button>
                            <button class="t-btn btn">Hire Us</button>
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
            <section id="one-half" class="goblack">
                <span><img src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" /></span>

                <div class="half-content">
                    <div class="half__text">
                        <h1>About Us</h1>
                        <p>Orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor
                            molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu.</p>
                    </div>
                    <div class="half__boxes">
                        <div class="box">
                            <span href="#"><i class="fas fa-paw logo"></i></span>
                            <h2>Our Mission</h2>
                            <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
                        </div>
                        <div class="box">
                            <span href="#"><i class="fas fa-paw logo"></i></span>
                            <h2>Our Vision</h2>
                            <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
                        </div>
                    </div>
                </div>

            </section>


            <section id="two">
                <div class="heading ">
                    <h1>What We Do</h1>
                    <p class="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                        eaque ipsa quae ab
                        illo inventore.</p>

                </div>


                <div class="container">
                    <div class="info">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img1.jpg" alt="" /></span>
                        <div class="info__text">
                            <h1>Donec sed teus enime</h1>

                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                    <div class="info">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img2.jpg" alt="" /></span>
                        <div class="info__text">
                            <h1>It's enim ad minim aute</h1>

                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                    <div class="info">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img3.jpg" alt="" /></span>
                        <div class="info__text">
                            <h1>Ullamco laboris nisi uts</h1>

                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <h5 class="">READ MORE</h5>
                        </div>
                    </div>
                </div>

            </section>


            <section id="four" class="goblack">
                <article>
                    <h1>Happy Customers</h1>
                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.</p>

                    <p>Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat. Lorem
                        ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>

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
                                Dsuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                "
                            </p>

                            <h4>Mario Spe</h4>
                        </div>
                    </div>

                    <div class="some__info">

                        <div class="four__text">

                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. "
                            </p>
                            <h4>Petey Cru</h4>
                        </div>
                    </div>

                </div>

            </section>



            <section id="six">
                <h5>PET LOVERS</h5>
                <h1>Our Team Is Filled With Highly Dedicated Pet Lovers</h1>

                <button class="btn w-btn">Read More</button>

            </section>

        </>
    )
}
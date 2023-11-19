import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/About.css'
import { About1 } from "./About1"
import Testimonial from "./Testimonial"
function About()
{
    return(
       <>
       <Navbar></Navbar>
       <About1></About1>
       <Testimonial></Testimonial>
        <Footer></Footer>
        </>

    )
}
export default About;
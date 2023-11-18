import Navbar from "./Navbar"
import '../styles/Home.css'
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer"
export default function Home() {
    return (
      <div>
        <Navbar />
       
        <ToastContainer /> {/* Render ToastContainer here */}
        <Footer />
      </div>
    );
  }
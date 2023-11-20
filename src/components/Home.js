import Navbar from "./Navbar"
import '../styles/Home.css'
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer"
import imgage from './pexels-pixabay-147411.jpg'
import New from "./New";
export default function Home() {
  return (
    <div>
      <Navbar />
      <New />
      <ToastContainer /> 
      <Footer />
    </div>
  );
}
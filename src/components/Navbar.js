//navbar.js
import '../styles/Navbar.css';
import { useUser } from './UserContext';
import Logout from './Logout';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbar() {
  const { user } = useUser();
  return (
    <header>
      <div className="container">
        <input type="checkbox" name="check" id="check" />
        <div className="logo-container">
          <h3 className="logo">Brand<span>Name</span></h3>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ '--i': '.6s' }}>
                <a href="/">Home</a>
              </li>
             
              
              <li className="nav-link" style={{ '--i': '.85s' }}>
                <a href="/shop">Shop<i className="fas fa-caret-down"></i></a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="/shop">Products</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Categoty<i className="fas fa-caret-down"></i></a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 3</a>
                          </li>
                         
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ '--i': '.6s' }}>
                <a href="/about">About</a>
              </li>
           
              <li className="nav-link" style={{'--i': '1.35s'}}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="log-sign" style={{'--i': '1.8s'}}>
            <a href="/login" className="btn transparent">Log in</a>
            <a href="/logout" className="btn transparent">LogOut</a>
          </div>
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
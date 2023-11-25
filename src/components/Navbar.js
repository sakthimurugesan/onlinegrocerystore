import '../styles/Navbar.css'

import { useUser } from './UserContext';
import Logout from './Logout';

function Navbar() {
  const { user } = useUser(); 
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
        <a href='/' style={{
          color:"white",
        textDecoration:"none"
        }}>GreenBasket</a>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href='/'>Home</a>
        <a href='/shop'>Shop</a>
        {user ? (
          <div className='login-email-div'>
              <a href='/cart' style={{color:'white'}}>Cart</a>
              <a style={{color:'white'}}> Hello, {user.username} </a>
               <Logout></Logout> 
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
        

      </div>
    </div>
  )
}

export default Navbar;
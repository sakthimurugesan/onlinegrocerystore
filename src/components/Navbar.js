import '../styles/Navbar.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
var login_true=false;
function Navbar()
{
  
    return(
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
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
        <a href='/about'>About</a>
        <a href='/login'>Login</a>
        <a href='/cart'>Cart</a>
   
  </div>
</div>
    )
}

export default Navbar;
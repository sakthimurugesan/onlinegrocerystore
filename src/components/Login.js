import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer"
import '../styles/Login.css'
import login_true from './Navbar.js'
function Login() {
    const navigate=useNavigate();
    return (
        <div>
            <Navbar />
            <div className="login-div">
                <div className="login-div-1">
                    <div className="login-img-div">
                       <center> <img height={150} width={150} className="login-img" src="profile.png"></img></center>
                    </div>
                    <div className="login-form-div">
                        <form  onSubmit={() => {navigate("/");login_true=true}}>
                            <label for="e-mail">E-mail</label> <br></br>
                            <input type="email" id="e-mail" placeholder="Enter your email"></input> <br></br>
                            <label for="password">Password</label> <br></br>
                            <input type="password" id="password" placeholder="Enter your password"></input> <br></br>
                            <button id="submit-btn" type="submit">Login</button>

                        </form>
                    </div>
                </div>

               <center> New User? <a href="/register">Register</a></center>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Login;
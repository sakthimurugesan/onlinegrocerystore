import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer"

import '../styles/Register.css'
export default function Register() {
    const navigate = useNavigate();
    return (

        <div>
            <Navbar />
            <div className="login-div">
                <div className="login-div-1">
                    <div className="login-img-div">
                       <center> <img height={150} width={150} className="login-img" src="profile.png"></img></center>
                    </div>
                    <div className="login-form-div">
                        <form onSubmit={() => navigate("/login")}>
                            <label for="e-mail">E-mail</label> <br></br>
                            <input type="email" id="e-mail" placeholder="Enter your email"></input> <br></br>
                            <label for="password">Password</label> <br></br>
                            <input type="password" id="password" placeholder="Enter your password"></input> <br></br>
                            <label id="confirmPassword" for="password-1">Confirm Password</label> <br></br>
                            <input type="password" id="password-1" placeholder="Enter your password again"></input> <br></br>
                            <a href="/login"><button id="submit-btn" type="submit">Register</button></a>

                        </form>
                    </div>
                </div>

                <center> Existing User? <a href="/login">Login</a></center>
            </div>
            <Footer></Footer>
        </div>
    );
}

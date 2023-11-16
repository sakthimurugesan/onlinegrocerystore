// Filename - App.js

import "./App.css";
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Switch
} from "react-router-dom";
// import Home component
import Navbar from "./components/Navbar";
// import About component
import Login from "./components/Login";
import About from "./components/About";
import Register from "./components/Register";
import Home from "./components/Home";
var login_true=false;


function App() {
	return (
	
			<Router>
				<Routes>
					<Route path="/" element={<Home></Home>}/>
					<Route path="/about" element={<About></About>}/>
					<Route path="/login" element={<Login></Login>}/>
					<Route path="/register" element={<Register></Register>}/>
					
				</Routes>
			</Router>
		
	);
}

export default App;

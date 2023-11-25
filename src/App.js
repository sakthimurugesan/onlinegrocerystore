import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Switch
} from "react-router-dom";
import Login from "./components/Login";
import TestAxios from "./components/TestAxios";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import Cart from './components/Cart'
import Payment from "./components/Payment";
import PrivateRoute from "./PrivateRoute";
import UpdatePage from "./components/UpdatePage";
import AddProduct from "./components/Addpage";
var login_true = false;


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home></Home>} />
				<Route path="/shop" element={<Shop></Shop>} />
				<Route path="/shop/product/:id" element={<ProductPage />} />
				<Route path="/login" element={<Login></Login>} />
				<Route path="/register" element={<Register></Register>} />
				<Route path="/logout" element={<Logout></Logout>} />
				<Route path="/dashboard" element={<PrivateRoute />} />
				<Route path="/update/:id" element={<UpdatePage></UpdatePage>} />
				<Route path="/addproduct" element={<AddProduct></AddProduct>} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/payment" element={<Payment></Payment>} />

			</Routes>
		</Router>
	);
}

export default App;
import '../styles/Footer.css'
export default function Footer() {
	return (
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>company</h4>
						<ul>
							<li><a href="#">about us</a></li>
							<li><a href="#">our services</a></li>
							<li><a href="#">privacy policy</a></li>
							<li><a href="#">affiliate program</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>get help</h4>
						<ul>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">shipping</a></li>
							<li><a href="#">returns</a></li>
							<li><a href="#">order status</a></li>
							<li><a href="#">payment options</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>online shop</h4>
						<ul>
							<li><a href="#">Meat</a></li>
							<li><a href="#">Dairy</a></li>
							<li><a href="#">Bakery</a></li>
							<li><a href="#">Vegan Oil</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>follow us</h4>
						<div class="social-links">
							<a href="#"><img style={{
								borderRadius:"50%",
								objectFit:"cover"
							}} src="./tw.png"></img></a>
							<a href="#"><img style={{
								borderRadius:"50%",
								objectFit:"cover"
							}}  src="./whats.png"></img></a>
							<a href="#"><img style={{
								borderRadius:"50%",
								objectFit:"cover"
							}}  src="./moj.png"></img></a>
							<a href="#"><img  style={{
								borderRadius:"50%",
								objectFit:"cover"
							}}  src="./ig.png"></img></a>
							
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}
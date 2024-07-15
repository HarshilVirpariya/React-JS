import React from 'react'
import { Link } from 'react-router-dom'
import { img } from '../../img/img'
import "./CartCss.css"

function Cart() {
  return (
    <header>
    	<div class="logo">
    		<a href="#" class="wow animate__animated animate__bounceInLeft"><img src={img.logo}/></a>
    	</div>
    	<i class="fa fa-bars" id="bars"></i>
    	<div class="link wow animate__animated animate__bounceInDown">
    		<Link to="../">Home</Link>
    		<Link to="../Shop">Shop</Link>
    		<Link to="../About">About</Link>
    		<Link to="../Latest">Latest</Link>
    	</div>
    	<div class="login wow animate__animated animate__bounceInRight">
    		<a href="#"><i class="ri-search-line"></i></a>
    		<a href="#"><i class="ri-user-line"></i></a>
    		<a href="#"><i class="ri-shopping-cart-2-line"></i></a>
    	</div>
        <div class="subheader">
    	<p class="display-1 wow animate__animated animate__bounceInUp" id="cart">
    		Cart List
    	</p>
    </div>
    <div class="cartlist">
    	<div class="crt1">
    		<div class="ctr4 wow animate__animated animate__bounceInLeft">
    			<div class="ctr6">
    				<img src={img.popular4}/>
    			</div>
    			<div class="ctr6">
    				<h6>
    					Luxury Rolex Watch Silver Metal Belt
    				</h6>
    			</div>
    		</div>
    		<div class="ctr4 wow animate__animated animate__bounceInRight">
    			<div class="ctr5">
    				<h3>Price ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">760.00</h4>
    			</div>
    			<div class="ctr5">
    				<h3>Quantity</h3>
    				<br/>
    				<br/>
    				<p id="quant">1+-</p>
    			</div>
    			<div class="ctr5">
    				<h3>Total ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">1220.00</h4>
    			</div>
    		</div>
    	</div>
    	<div class="crt2">
    		<div class="ctr4 wow animate__animated animate__bounceInLeft">
    			<div class="ctr6">
    				<img src={img.popular6}/>
    			</div>
    			<div class="ctr6">
    				<h6>
    					Luxury Rolex Watch Silver Lather Belt
    				</h6>
    			</div>
    		</div>
    		<div class="ctr4 wow animate__animated animate__bounceInRight">
    			<div class="ctr5">
    				<h3>Price ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">360.00</h4>
    			</div>
    			<div class="ctr5">
    				<h3>Quantity</h3>
    				<br/>
    				<br/>
    				<p id="quant">1+-</p>
    			</div>
    			<div class="ctr5">
    				<h3>Total ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">720.00</h4>
    			</div>
    		</div>
    	</div>
    	<div class="crt3">
    		<div class="ctr4 wow animate__animated animate__bounceInLeft">
    			<div class="ctr6">
    				<img src={img.popular5}/>
    			</div>
    			<div class="ctr6">
    				<h6>
    					Luxury Rolex Watch Golden Rubber Belt
    				</h6>
    			</div>
    		</div>
    		<div class="ctr4 wow animate__animated animate__bounceInRight">
    			<div class="ctr5">
    				<h3>Price ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">560.00</h4>
    			</div>
    			<div class="ctr5">
    				<h3>Quantity</h3>
    				<br/>
    				<br/>
    				<p id="quant">1+-</p>
    			</div>
    			<div class="ctr5">
    				<h3>Total ($)</h3>
    				<br/>
    				<br/>
    				<h4 class="counter">920.00</h4>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="buttons">
    	<button class="btn btn-primary wow animate__animated animate__bounceInLeft" id="btn">Update Cart</button>
    	<button class="btn btn-primary wow animate__animated animate__bounceInRight" id="btn">Continue</button>
    </div>
    <div class="address">
    	<div class="add wow animate__animated animate__bounceInLeft">
    		<p class="display-5" id="deli">
    			Fill The Detail For Delivery !!!
    		</p>
    	</div>
    	<div class="add wow animate__animated animate__bounceInRight">
    		<input type="text" name="" placeholder="Enter Your FullName" id="input"/><br/>
    		<input type="text" name="" placeholder="Enter Your Country" id="input"/><br/>
    		<input type="text" name="" placeholder="Enter Your State" id="input"/><br/>
    		<input type="text" name="" placeholder="Enter Your City" id="input"/><br/>
    		<textarea placeholder="Enter Your Address" id="textarea"/><br/>
    		<button class="btn btn-success" id="button">Submit</button>
    	</div>
    </div>
    <footer>
    	<div class="foot wow animate__animated animate__bounceInLeft">
    		<a href=""><img src={img.logo}/></a>
    	</div>
    	<div class="foot wow animate__animated animate__bounceInUp">
    		<h6>Quick Links</h6>
    		<a href="..\page-4\about.html">About</a>
    		<a href="">Offers & Discounts</a>
    		<a href="">Get Coupon</a>
    		<a href="..\page-8\contact.html">Contact Us</a>
    	</div>
    	<div class="foot wow animate__animated animate__bounceInDown">
    		<h6>New Products</h6>
    		<a href="">Woman Cloth</a>
    		<a href="">Fashion Accessories</a>
    		<a href="">Man Accessories</a>
    		<a href="">Rubber Made Toys</a>
    	</div>
    	<div class="foot wow animate__animated animate__bounceInRight">
    		<h6>Support</h6>
    		<a href="">Frequently Asked Questions</a>
    		<a href="">Terms & Conditions</a>
    		<a href="">Privacy Policy</a>
    		<a href="">Report a Payment Issue</a>
    	</div>
    </footer>
</header>
  )
}

export default Cart



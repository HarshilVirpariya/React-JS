import React from 'react'
import "./HomeCss.css"
import { img } from '../../../img/img'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
		<div className="logo">
			<a href="#" className="wow animate__animated animate__bounceInLeft"><img src={img.logo}/></a>
		</div>
		<i className="fa fa-bars" id="bars"></i>
		<div className="link wow animate__animated animate__bounceInDown">
			<Link to="../Home"> Home </Link>
			<Link to="../Shop">Shop</Link>
			<Link to="../About">About</Link>
			<Link to="../Letest">Latest</Link>
			<Link to="../cart">Cart</Link>
		</div>
		<div className="login wow animate__animated animate__bounceInRight">
			<a href="#"><i className="ri-search-line"></i></a>
			<Link to="../Registration"><i className="ri-user-line"></i></Link>
			<a href="#"><i className="ri-shopping-cart-2-line"></i></a>
		</div>
		<div className="subheader">
    	  <div className="subdiv">
    	    <p className="display-3 wow animate__animated animate__bounceInLeft" id="p">
    	      Select Your New<br/>
    	      Perfect Style
    	    </p>
    	    <h6 className="wow animate__animated animate__bounceInLeft">
    	      Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
    	      tempor incididunt ut labore et dolore magna aliqua. 
    	    </h6>
    	    <br/>
    	    <br/>
    	    <button id="hbutton" className="wow animate__animated animate__bounceInDown">SHOP NOW</button>
    	  </div>
    	  <div className="subdiv wow animate__animated animate__bounceInRight">
    	    <img src={img.watch}/>
    	  </div>
    	</div>
		<div class="arrivals">
    		<div class="arrivals2">
    			<p class="display-4 wow animate__animated animate__bounceInUp" id="arrivals">New Arrivals</p>
    		</div>
    		<div class="arrivals3">
    			<div class="arrivals4 wow animate__animated animate__bounceInLeft">
    				<div class="arrivals5">
    					<img src={img.new_product1}/>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div class="arrivals4 wow animate__animated animate__bounceInDown">
    				<div class="arrivals5">
    	            <img src={img.new_product2}/>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div class="arrivals4 wow animate__animated animate__bounceInRight">
    				<div class="arrivals5">
    	                <img src={img.new_product3}/>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    		</div>
    	</div>
		<div className="watches">
		    <div className="watch1 wow animate__animated animate__bounceInLeft">
		    	<img src={img.gallery1}/>
		    </div>
		    <div className="watch2 wow animate__animated animate__bounceInDown">
		    	<img src={img.gallery2}/>
		    </div>
		    <div className="watch3 wow animate__animated animate__bounceInRight">
		    	<img src={img.gallery3}/>
		    </div>
		    <div className="watch4 wow animate__animated animate__bounceInRight">
		    	<img src={img.gallery4}/>
		    </div>
    	</div>
		<div className="popular">
    		<div className="pop1 wow animate__animated animate__bounceInUp">
    			<p className="display-3" id="popular">Popular Items</p>
    			<h6 id="ph6">
    				Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
    				aliqua. Quis ipsum suspendisse ultrices gravida.
    			</h6>
    		</div>
    		<div className="pop2">
    			<div className="pop3 wow animate__animated animate__bounceInLeft">
    				<div className="pop4">
    					<img src={img.popular1}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div className="pop3 wow animate__animated animate__bounceInDown">
    				<div className="pop4">
    	                <img src={img.popular2}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div className="pop3 wow animate__animated animate__bounceInRight">
    				<div className="pop4">
    	                <img src={img.popular3}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div className="pop3 wow animate__animated animate__bounceInLeft">
    				<div className="pop4">
    					<img src={img.popular4}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div className="pop3 wow animate__animated animate__bounceInDown">
    				<div className="pop4">
    					<img src={img.popular5}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<div className="pop3 wow animate__animated animate__bounceInRight">
    				<div className="pop4">
    					<img src={img.popular6}/>
    					<button id="cart">ADD TO CART</button>
    				</div>
    				<h6 id="h6">Thermo Ball Etip Gloves</h6>
    				<p id="price">$ 45,743</p>
    			</div>
    			<button id="more" className="wow animate__animated animate__bounceInUp">VIEW MORE PRODUCT</button>
    		</div>
    	</div>
		<div className="video">
		    <i className="ri-play-fill wow animate__animated animate__bounceInDown"></i>
    	</div>
		<div className="services">
    		<div className="ser wow animate__animated animate__bounceInLeft">
    			<i className="ri-archive-line" id="box"></i>
    			<h5>Free Shipping Method</h5>
    			<p>
    				aorem ixpsacdolor sit ameasecur <br/>
    				adipisicing elitsf edasd.
    			</p>
    		</div>
    		<div className="ser wow animate__animated animate__bounceInDown">
    			<i className="ri-lock-2-line" id="lock"></i>
    			<h5>Secure Payment System</h5>
    			<p>
    				aorem ixpsacdolor sit ameasecur <br/>
    				adipisicing elitsf edasd.
    			</p>
    		</div>
    		<div className="ser wow animate__animated animate__bounceInRight">
    			<i className="ri-refresh-line" id="refresh"></i>
    			<h5>Secure Payment System</h5>
    			<p>
    				aorem ixpsacdolor sit ameasecur <br/>
    				adipisicing elitsf edasd.
    			</p>
    		</div>
    	</div>
		<footer>
    		<div className="foot wow animate__animated animate__bounceInLeft">
    			<a href=""><img src={img.logo}/></a>
    		</div>
    		<div className="foot wow animate__animated animate__bounceInUp">
    			<h6>Quick Links</h6>
    			<a href="..\page-4\about.html">About</a>
    			<a href="">Offers & Discounts</a>
    			<a href="">Get Coupon</a>
    			<a href="..\page-8\contact.html">Contact Us</a>
    		</div>
    		<div className="foot wow animate__animated animate__bounceInDown">
    			<h6>New Products</h6>
    			<a href="">Woman Cloth</a>
    			<a href="">Fashion Accessories</a>
    			<a href="">Man Accessories</a>
    			<a href="">Rubber Made Toys</a>
    		</div>
    		<div className="foot wow animate__animated animate__bounceInRight">
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

export default Header
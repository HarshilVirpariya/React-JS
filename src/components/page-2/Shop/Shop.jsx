import React from 'react'
import { img } from '../../../img/img'
import "./ShopCss.css"

function Shop() {
  return (
    <header>
    	<div className="logo">
    		<a href="#" className="wow animate__animated animate__bounceInLeft"><img src={img.logo}/></a>
    	</div>
    	<i className="fa fa-bars" id="bars"></i>
    	<div className="link wow animate__animated animate__bounceInDown">
    		<a href="D:\RW - TASK'S\REACT JS\git\React-JS\finalproject\src\components\page-1\Home\Home.jsx">Home</a>
    		<a href="..\page-4\about.html">About</a>
    		<a href="#" type="button" className="dropdown-toggle" data-bs-toggle="dropdown" id="drop">Latest
    				<ul className="dropdown-menu">
    					<a href="..\page-5\latest.html"><li className="dropdown-item" id="menu">Product Detail</li></a>
    				</ul>
    			</a>
    		<a href="..\page-6\blog.html">Blog</a>
    		<a href="..\page-7\cart.html">Cart</a>
    		<a href="..\page-8\contact.html">Contact</a>
    	</div>
    	<div className="login wow animate__animated animate__bounceInRight">
    		<a href="#"><i class="ri-search-line"></i></a>
    		<a href="#"><i class="ri-user-line"></i></a>
    		<a href="#"><i class="ri-shopping-cart-2-line"></i></a>
    	</div>
        <div className="subheader">
    	<p class="display-1 wow animate__animated animate__bounceInUp" id="wat">
    		Watch Shop
    	</p>
    </div>
    <div className="popular">
    	<div className="pop1">
    		<p className="display-3 wow animate__animated animate__bounceInUp" id="popular">Popular Items</p>
    		<h6 id="ph6" className="wow animate__animated animate__bounceInUp">
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
    		<a href="">About</a>
    		<a href="">Offers & Discounts</a>
    		<a href="">Get Coupon</a>
    		<a href="">Contact Us</a>
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

export default Shop
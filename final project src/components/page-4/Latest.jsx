import React from 'react'
import "./Latestcss.css"
import { img } from '../../img/img'
import { Link } from "react-router-dom"

function Latest() {
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
    		<Link to="../Cart">Cart</Link>
    	</div>
    	<div class="login wow animate__animated animate__bounceInRight">
    		<a href="#"><i class="ri-search-line"></i></a>
    		<a href="#"><i class="ri-user-line"></i></a>
    		<a href="#"><i class="ri-shopping-cart-2-line"></i></a>
    	</div>
        <div class="subheader">
    	<p class="display-1 wow animate__animated animate__bounceInUp" id="latest">
    		Latest Watch
    	</p>
    </div>
    <section class="slider-container wow animate__animated animate__bounceInDown">
       	<div class="container">
       	  <div class="swiper card_slider">
       	    <div class="swiper-wrapper">
       	      <div class="swiper-slide">
       	        <div class="img_box">
       	          <img src={img.gallery1}/>
       	        </div>
       	      </div>
       	      <div class="swiper-slide">
       	        <div class="img_box">
       	          <img src={img.sectin_bg1} id="img2"/>
       	        </div>
       	      </div>
       	    </div>
       	  </div>
       	</div>
    </section>
    <div class="text">
    	<div class="txt1">
    		<p class="display-5 wow animate__animated animate__bounceInLeft" id="p">
    			Foam filling cotton slow<br/>
    			rebound pillows
    		</p>
    	</div>
    	<div class="txt2">
    		<h6 id="h6" class="wow animate__animated animate__bounceInRight">
    			Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.<br/> Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.<br/>
    			Credibly innovate granular internal or organic sources whereas high standards in web-readiness.<br/> Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically<br/>
    			synthesize integrated schemas. with optimal networks.
    		</h6>
    		<button class="wow animate__animated animate__bounceInUp" id="button">ADD TO CART</button>
    	</div>
    </div>
    <div class="update">
    	<div class="updt">
    		<p class="display-3 wow animate__animated animate__bounceInLeft" id="upt">
    			Get promotions & updates!
    		</p>
    	</div>
    	<div class="updt">
    		<h6 id="log" class="wow animate__animated animate__bounceInRight">
    			Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources<br/> credibly innovate granular internal .
    		</h6>
    		<input type="mail" name="mail" placeholder="Enter Your Mail" id="input" class="wow animate__animated animate__bounceInUp"/><button id="btn" class="wow animate__animated animate__bounceInDown">Subscribe</button>
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

export default Latest
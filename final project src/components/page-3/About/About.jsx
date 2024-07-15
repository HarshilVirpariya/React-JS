import React from 'react'
import "./AboutCss.css"
import { img } from '../../../img/img'
import { Link } from 'react-router-dom'

function About() {
  return (
    <header>
    	<div className="logo">
    		<a href="#" className="wow animate__animated animate__bounceInLeft"><img src={img.logo}/></a>
    	</div>
    	<i className="fa fa-bars" id="bars"></i>
    	<div className="link wow animate__animated animate__bounceInDown">
    		<Link to="../">Home</Link>
    		<Link to="../About">About</Link>
    		<Link to="../Latest">Latest</Link>
    		<Link to="../Cart">Cart</Link>
    	</div>
    	<div className="login wow animate__animated animate__bounceInRight">
    		<a href="#"><i class="ri-search-line"></i></a>
    		<a href="#"><i class="ri-user-line"></i></a>
    		<a href="#"><i class="ri-shopping-cart-2-line"></i></a>
    	</div>
        <div className="subheader">
    	    <p className="display-1 wow animate__animated animate__bounceInUp" id="wat">
    	    	About Us
    	    </p>
        </div>
        <div className="about">
    	    <div className="abt">
    	    	<p id="mission" className="wow animate__animated animate__bounceInLeft">-Our Mission</p>
    	    	<h6 className="wow animate__animated animate__bounceInRight">
    	    		Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et <br/>
    	    		dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra <br/>
    	    		sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodoviverra sebfd<br/>
    	    		dho eiusmod tempor maecenas accumsan lacus.
    	    		<br/>
    	    		<br/>
    	    		Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus <br/>
    	    		commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
    	    	</h6>
    	    </div>
    	    <div className="abt">
    	    	<p id="mission" className="wow animate__animated animate__bounceInLeft">-Our Vision</p>
    	    	<h6 className="wow animate__animated animate__bounceInRight">
    	    		Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et <br/>
    	    		dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra <br/>
    	    		sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodoviverra sebfd<br/>
    	    		dho eiusmod tempor maecenas accumsan lacus.
    	    		<br/>
    	    		<br/>
    	    		Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus <br/>
    	    		commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
    	    	</h6>
    	    </div>
        </div>
		<div class="video">
	<i class="ri-play-fill wow animate__animated animate__bounceInDown"></i>
</div>
<div class="services">
	<div class="ser wow animate__animated animate__bounceInLeft">
		<i class="ri-archive-line" id="box"></i>
		<h5>Free Shipping Method</h5>
		<p>
			aorem ixpsacdolor sit ameasecur <br/>
			adipisicing elitsf edasd.
		</p>
	</div>
	<div class="ser wow animate__animated animate__bounceInDown">
		<i class="ri-lock-2-line" id="lock"></i>
		<h5>Secure Payment System</h5>
		<p>
			aorem ixpsacdolor sit ameasecur <br/>
			adipisicing elitsf edasd.
		</p>
	</div>
	<div class="ser wow animate__animated animate__bounceInRight">
		<i class="ri-refresh-line" id="refresh"></i>
		<h5>Secure Payment System</h5>
		<p>
			aorem ixpsacdolor sit ameasecur <br/>
			adipisicing elitsf edasd.
		</p>
	</div>
</div>
<footer>
	<div class="foot wow animate__animated animate__bounceInLeft">
		<a href=""><img src={img.logo}/></a>
	</div>
	<div class="foot wow animate__animated animate__bounceInUp">
		<h6>Quick Links</h6>
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

export default About
import React from 'react'
import "./AboutCss.css"
import { img } from '../../../img/img'

function About() {
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
    	    <p className="display-1 wow animate__animated animate__bounceInUp" id="wat">
    	    	Watch Shop
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
    </header>
  )
}

export default About
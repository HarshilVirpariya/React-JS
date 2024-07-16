import React from 'react'
import { Assets } from '../../Assets/Assets'
import "./HeaderCss.css"

function Header() {
  return (
    <header>
    	<nav>
    		<div className="logo wow animate__animated animate__fadeInLeft">
    			<a href="#">AUTONO</a>
    		</div>
    		<div className="link wow animate__animated animate__fadeInRight">
    			<a href="#">Technology</a>
    			<a href="#">About</a>
    			<a href="#">Careers</a>
    			<button id="btn-1">Subscribe</button>
    		</div>
    	</nav>
    	<div className="text">
    		<h1 id="text-h1" className="wow animate__animated animate__fadeInDown">
    			THE FUTURE OF <br/>
    			MOBILITY IS HERE
    		</h1>
    		<p id="text-p" className="wow animate__animated animate__fadeInUp">
    			Discover the safest self-driving experience with Autono.
    		</p>
    	</div>
    	<img src={Assets.shade}/>
    </header>
  )
}

export default Header
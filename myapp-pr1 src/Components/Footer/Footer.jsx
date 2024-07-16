import React from 'react'
import "./FooterCss.css"

function Footer() {
  return (
    <footer>
    	<div class="foot-1 wow animate__animated animate__fadeInUp">
    		<div class="branding">
    			<a href="#"> AUTONO </a>
    		</div>
    		<div class="head-link wow animate__animated animate__fadeInUp">
    			<a href="#"> Technology </a>
    			<a href="#"> About </a>
    			<a href="#"> Careers </a>
    		</div>
    	</div>
    	<div class="foot-2">
    		<div class="branding"></div>
    		<div class="head-link wow animate__animated animate__fadeInUp">
    			<h4 id="head-link-h4"> Tel : 123-456-7890 </h4>
    			<h4 id="head-link-h4"> Email : info@mysite.com </h4>
    		</div>
    	</div>
    	<div class="foot-3">
    		<div class="sub-foot-3 wow animate__animated animate__fadeInUp">
    			<a href=""><i class="ri-linkedin-fill"></i></a>
    			<p id="foot-p"> Linkedin </p>
    		</div>
    		<div class="sub-foot-3 wow animate__animated animate__fadeInUp">
    			<a href=""><i class="ri-facebook-fill"></i></a> 
    			<p id="foot-p"> Facebook </p>   			
    		</div>
    		<div class="sub-foot-3 wow animate__animated animate__fadeInUp">
    			<a href=""><i class="ri-twitter-fill"></i></a>
    			<p id="foot-p"> Twitter </p>
    		</div>
    		<div class="sub-foot-3 wow animate__animated animate__fadeInUp">
    			<a href=""><i class="ri-instagram-line"></i></a>
    			<p id="foot-p"> Instagram </p>	
    		</div>
    	</div>
    </footer>
  )
}

export default Footer
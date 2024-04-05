import React from 'react'

const Navbar = () => {
  return (
    <div className='header'>
      <div className="subheader">
		    <div className='logo'>
		    	<h1 id="hh1">BizBud</h1>
		    </div>
		    <nav>
		    	<a href="#">Home</a>
		    	<a href="#">Service</a>
		    	<a href="#">About</a>
		    	<a href="#">Testimonials</a>
		    	<a href="#">Clients</a>
		    	<a href="#">Contact</a>
		    </nav>
		    <div className='button'>
		    	<button id="btn">Call Now</button>
		    </div>
	    </div>
      <div className='text'>
	    	<p className='display-1' id="p"> 
	    		The Power <br/>
	    		of Good Advice
	    	</p>
	    	<h5 id="h5">
	    		I'm a paragraph. Click here to add your <br/>
	    		own text and edit me.
	    	</h5>
	    	<button id="btn2">Learn More</button>
	    </div>
    </div> 
  )
}

export default Navbar
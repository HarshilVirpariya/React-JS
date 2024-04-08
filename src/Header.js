import React from 'react'

function Header() {
  return (
        <header>
    	<div className="subheader">
    		<div className="logo">
    			<p id="hotell"><a href="#">Hotell</a></p>
    		</div>
    		<nav>
    			<a href="" id="a1">Home</a>
    			<a href="#" id='a2'>Destinition</a>
    			<a href="#" id="a3">Service</a>
    			<a href="#" id="a4">About</a>
    			<a href="#" id="a5">Contact</a>
    		</nav>
    	</div>
    	<div className="text">
    		<p id="text">
    			Once a year go someplace <br/>
    			you've never been before.
    		</p>
    		<button id="button">See Video</button>
    	</div>
    </header>
  )
}

export default Header
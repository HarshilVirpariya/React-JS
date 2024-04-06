import React from 'react'

function Header() {
  return (
    <header>
		<div className="subheader">
			<div className="logo">
				<a href="#"><h1>Davon</h1>
				<h3>Business Consulting School</h3></a>
			</div>
			<nav>
				<a href="#">Who We Are</a>
				<a href="#">Learning Modules</a>
				<a href="#">Resources</a>
				<a href="#">Our Team</a>
				<a href="#">Contact</a>
			</nav>
		</div>
		<div className="text">
			<h1>
				Davon Online School of<br/>
				Business Consulting
			</h1>
			<h4>
				The destination for leaders who seek to change the world
			</h4>
			<button><a href="#">Enroll Now</a></button>
		</div>
		<div className="text2">
			<h3>Subscribe to our Mailing List</h3>
			<h6>Enter Your Email Here*</h6>
			<textarea placeholder="Email Address" /><button id='btn'><a href="#">SUBSCRIBE</a></button>
		</div>
	</header>
  )
}

export default Header
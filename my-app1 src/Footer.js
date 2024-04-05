import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    	<div className="foot">
    		<h4 id="fh4">CONTACT</h4>
    		<p id="fp">
    			Let’s Work Together
    		</p>
    		<br/>
    		<h6>
    			500 Terry Francine St. San Francisco, CA 94158<br/>
    			info@mysite.com<br/>
    			Tel: 123-456-7890
    		</h6>
    		<br/>
    	</div>
    	<div className="foot">
    		<textarea placeholder="Leave Us a Message" id="textarea"></textarea>
    		<button id="btn3" class="wow animate__animated animate__bounceInUp">Submit</button>
    	</div>
    </div>
  )
}

export default Footer
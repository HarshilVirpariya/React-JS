import React from 'react'
import "./InformationCss.css"

function Information() {
  return (
    <div class="information">
    	<div class="info-1"></div>
    	<div class="info-2">
    		<h1 id="info-h1" class="wow animate__animated animate__fadeInLeft">
    			REAL-TIME <br/>
    			INFORMATION
    		</h1>
    		<br/>
    		<br/>
    		<h5 id="info-h5" class="wow animate__animated animate__fadeInRight">
    			I'm a paragraph. Click here to add your<br/> 
    			own text and edit me. It’s easy. Just click <br/>
    			“Edit Text” or double click me to add <br/>
    			your own content and make changes <br/>
    			to the font. I’m a great place for you to tell <br/>
    			a story and let your users know a little <br/>
    			more about you.
    		</h5>
    		<b/>
    		<b/>
    		<button id="btn-3" class="wow animate__animated animate__fadeInUp">READ MORE</button>
    	</div>
    </div>
  )
}

export default Information
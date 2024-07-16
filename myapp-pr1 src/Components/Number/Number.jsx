import React from 'react'
import { Assets } from '../../Assets/Assets'
import "./NumberCss.css"

function Number() {
  return (
    <div class="number">
    	<div class="n-1">
    		<img src={Assets.tool} class="wow animate__animated animate__fadeInLeft"/>
    	</div>
    	<div class="n-2">
    		<div class="auto-num wow animate__animated animate__fadeInRight">
    			<h1 id="auto-num-h1">
    				Autono In Number
    			</h1>
    		</div>
    		<div class="count">
				<div class="sub-count wow animate__animated animate__fadeInLeft">
					<h1 class="counter">200</h1>
					<p id="count-p">
						EMPLOYEES
					</p>
				</div>
				<div class="sub-count wow animate__animated animate__fadeInRight">
					<h1 class="counter">5</h1>
					<p id="count-p">
						CORE TEAMS
					</p>
				</div>
				<div class="sub-count wow animate__animated animate__fadeInLeft">
					<h1 class="counter">200</h1>
					<p id="count-p">
						CAPITAL
					</p>
				</div>
				<div class="sub-count wow animate__animated animate__fadeInRight">
					<h1 class="counter">326</h1>
					<p id="count-p">
						PARTNERS
					</p>
				</div>
			</div>	
    	</div>
    </div>
  )
}

export default Number
import React from 'react'

function Find() {
  return (
    <div className="ticket">
	    <div className="tic">
		    <input type="text" name="Date" placeholder="Date Arrival" id="input"/>
            <i className="ri-calendar-2-line wow animate__animated animate__bounceInLeft" id="i1"></i>
		    <input type="text" name="Date" placeholder="Date Departure" id="input"/>
            <i className="ri-calendar-2-line wow animate__animated animate__bounceInUp" id="i2"></i>
		    <input type="text" name="Date" placeholder="# Of Person" id="input"/>
            <i className="ri-user-line wow animate__animated animate__bounceInRight" id="i3"></i>
		    <button id="btnfind">Find Now</button>
	    </div>
    </div>
  )
}

export default Find
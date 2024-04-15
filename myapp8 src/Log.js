import React from 'react'
import { useState } from 'react'
function Logged()
{
    const[isLoggedIn , setisLogIn] = useState(false)

    function handleIn()
    {
        setisLogIn(true)
    }
    function handleOut()
    {
        setisLogIn(false)
    }
  return (
<div className='header'>
    <div className='div'>
    {
        isLoggedIn ? 
        (
            <>
                <h1 id='h1'>Welcome To Our Website</h1>
                <button onClick={handleOut} id='btn-2'>Log Out</button>
            </>) : 
        (
            <>
                <h1 id='h1'>Please Login : </h1>
                <button onClick={handleIn} id='btn-1'>Log In</button>
            </>)
    }
    </div>
</div>
  )
}

export default Logged
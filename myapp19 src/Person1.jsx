import React from 'react'
import UpdatedComp from './UpdatedComp'

function Person1({money , handleIncrease}) 
{
  return (
    <>
    <h1> Harshil Is Offering : ${money} </h1>
    <button onClick={handleIncrease}>Click Me !!</button>
    </>
  )
}

export default UpdatedComp(Person1)
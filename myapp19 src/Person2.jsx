import React from 'react'
import UpdatedComp from './UpdatedComp'

function Person2({money , handleIncrease}) 
{
  return (
    <>
        <h1> Ayan Is Offering : ${money} </h1>
        <button onClick={handleIncrease}>Click Me !!</button>
    </>
  )
}

export default UpdatedComp(Person2)
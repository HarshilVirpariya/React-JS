import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const[count , setCount] = useState(0)
    function increment()
    {
        setCount(count + 1)
    }
    function decrement()
    {
        if(count == 0)
        {
            setCount(0)
        }
        else
        {
            setCount(count - 1)
        }
    }
    function Reset()
    {
        setCount(0)
    }
  return (
    <div className='counter'>
        <img src={props.frame} alt='' className='i1'/>
        <h1>Likes : {count}</h1>
        <button onClick={increment} id='btn-1'>+</button>
        <button onClick={decrement} id='btn-2'>-</button>
        <button onClick={Reset} id='btn-3'>Reset</button>
    </div>
  )
}

export default Counter
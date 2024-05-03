import React from 'react'
import { useState } from 'react'

function UpdatedComp(OriginalComp) 
{
    function NewComp()
    {
        const[money , setMoney] = useState(10)
        
        function handleIncrease()
        {
            setMoney(money * 2)
        }

        return <OriginalComp money={money} handleIncrease={handleIncrease}/>

    }
  return NewComp
}

export default UpdatedComp
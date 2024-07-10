import React, { memo } from 'react';
import { useState } from 'react';
function Child({countTwo , handleInc}) {
    console.log("Child Componant")
  return (
    <div>
        {/* <h1> Child </h1>
        <h1> Counter : {countTwo} </h1>
        <button onClick={handleInc}> Increment </button> */}
    </div>
  )
}

export default memo(Child)
import {  useCallback , useState } from "react"
import React from 'react'
import Child from "./Child"

function Parent() {
const [count , setCount] = useState(0)
const [countwo , setcountwo] = useState(0)
const handleclick =()=>{
    setCount(count+1)
}
const handlecl=()=>{
 setCount(count-1)
}
const handleinc=useCallback(()=>{
    setcountwo(countwo+1)
    setCount(count-1)
},[countwo])
  return (
    <div className="main">
    <div className="samsung">
        <div className="notch">
            <div className="cam"></div>
        </div>
        <div className="maincount">
            <h1 id="h1">Counter : {count}</h1>
            <button id="inc" onClick={handleclick}>Increment</button>
            <button id="dec" onClick={handlecl}>Decrement</button>
            <Child handleinc={handleinc} countwo={countwo} />
        </div>
        <div className="backbutton">
            <div className="backline"></div>
        </div>
    </div>
    <div className="volume"></div>
    <div className="power"></div>
</div>
  )
}

export default Parent
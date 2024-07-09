import React from "react";
import { useSelector , useDispatch } from "react-redux"
import { increment , decrement } from "./Store";

function Counter(){
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count)

    return(
        <div className="main">
            <div className="samsung">
                <div className="notch">
                    <div className="cam"></div>
                </div>
                <div className="maincount">
                    <h1 id="h1"> Counter : {count} </h1>
                    <button onClick={()=>dispatch(increment())} id="inc"> INCREMENT </button>
                    <button onClick={()=>dispatch(decrement())} id="dec"> DECREMENT </button>
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

export default Counter
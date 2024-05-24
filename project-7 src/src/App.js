import { increment , decrement } from "./Comp/actions";
import { useSelector , useDispatch } from "react-redux";
import './App.css';

function App(){

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
      <>
        <div className="main">
          <div className="iphone">
            <div className="notch">
              <p id="notch-p"> 6 : 10 </p>
              <div className="cam"></div>
              <i class="ri-wifi-fill"></i>
              <i class="ri-battery-fill"></i>
            </div>
            <div className="cont">
              <h1 id="cont-h1"> Counter App </h1>
              <h1 id="cont-h1"> Count : {count} </h1>
              <div className="btn">
                <button onClick={()=>{dispatch(increment())}} id="btn-1"> Increment </button>
                <button onClick={()=>{dispatch(decrement())}} id="btn-1"> Decrement </button>
              </div>
            </div>
            <div className="back">
                <div className="back-notch"></div>
            </div>
          </div>
          <div className="power"></div>
          <div className="alert"></div>
          <div className="v-up"></div>
          <div className="v-down"></div>
        </div>
      </>
    );
}

export default App;
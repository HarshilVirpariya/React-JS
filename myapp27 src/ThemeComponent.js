import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeComponent() {
    const {theme} = useContext(ThemeContext)
    const {toggoleTheme} = useContext(ThemeContext)
  return (
    <div style={{
        display : "flex", justifyContent : "space-evenly", alignItems : "center",
        background : theme === "light" ? "white" : "black",
        color : theme === "light" ? "black" : "white",
        height : "100vh", width : "100%", transition : "1s"
    }}>
    <button onClick={toggoleTheme}
        style={{
            height: "50px" , width: "30%" , border: "2px solid black",
            border : theme === "light" ? "2px solid black" : "2px solid white",
            background : theme === "light" ? "white" : "black",
            color : theme === "light" ? "black" : "white",
            transition : "1s", fontFamily : "monospace",
            borderRadius : "10px", fontSize : "20px"
        }}>
            Switch To {theme === "light" ? "dark" : "light"}
        </button>
    </div>
  )
}

export default ThemeComponent
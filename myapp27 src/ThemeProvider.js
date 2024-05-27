import React,{useState} from "react"
import ThemeContext from "./ThemeContext"

function ThemeProvider({children}){
    const[theme , setTheme] = useState('light')
    const toggoleTheme = ()=>{
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    return(
        <ThemeContext.Provider value={{theme , toggoleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
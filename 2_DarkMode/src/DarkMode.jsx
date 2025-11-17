import React, { createContext, useState,use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{


    const [theme,setTheme] = useState('dark');

    const handleToggleTheme =()=>{
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" :"dark"))
    }
    return(
    <ThemeContext.Provider value={{theme , handleToggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

// create component
export const DarkLight =()=>{

    const {theme,handleToggleTheme} = use(ThemeContext);
    return (
    <div>
<h1>Dark Light Mode Website</h1>
<p> Hello !! My react 19 Fans </p>
<button onClick={handleToggleTheme}>
    {theme==="dark" ? "switch to light mode  " :"switch to dark mode"}
</button>
    </div>
    )

}
import React from 'react'
import {useState } from "react"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';

function DarkMode() {
    const [themeMode, setThemeMode] = useState("light")
    let clickedClass = "clicked"
    const body = document.body
    const ligthTheme = "ligth"
    const darkTheme = "dark"
    let theme

    if(localStorage){
        theme = localStorage.getItem("theme")
        
    }
    if(theme === ligthTheme || theme === darkTheme) {
        body.classList.add(theme)
    }else{
        body.classList.add(ligthTheme)
    }

    const switchTheme = e => {
       if(theme === darkTheme){
        body.classList.replace(darkTheme, ligthTheme)
        e.target.classList.remove(clickedClass)
        localStorage.setItem("theme","light")
        theme = ligthTheme
       }else {
        body.classList.replace(ligthTheme,darkTheme)
        e.target.classList.add(clickedClass)
        localStorage.setItem("theme","dark")
        theme = darkTheme
       }
       setThemeMode(theme)
    }
  return (
    <button className={theme ==="dark" ? clickedClass : ""} 
    id="darkMode" onClick={e => switchTheme(e)}>
    {themeMode === "light" || theme === "light" ? (
    <WbSunnyIcon></WbSunnyIcon>
    ) : (
    <Brightness3Icon></Brightness3Icon>
    )}
    </button>
  )
}

export default DarkMode
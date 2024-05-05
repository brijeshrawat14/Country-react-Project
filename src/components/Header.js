import React from 'react'
import './style.css'
import { useState } from 'react'
function Header(){
    const [isDark, SetisDark]=useState(false)
    return (
        <>
        <header className='header-container'>
            <div className='header-content'>
                <h2 className='title'>
                    <a href ="/">Where in the world</a>
                </h2>
                <p className='theme-changer' onClick={()=>{
                    document.body.classList.toggle('dark')
                    SetisDark(!isDark)
                }} >
                    {/* <i className={`fa-regular  fa- ${isDark ? 'sun' : 'moon'}`}/> */}
                    <i className= {`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>
                   { isDark ? "LightMode" : "DarkMode"}
                </p>
            </div>
        </header>
       
        </>
    )
}

export default Header;
import React from 'react'
import logo from "../Assets/logo.webp"
import download from "../Assets/download.webp"
import icon from "../Assets/icon.webp"

const Nav = () => {
  return (
<section className='Nav'>
    <img src={logo} className='logo'/>
     <div className='navbar'>
     <ul>
        <li>Home</li>
        <li>Web Series</li>
        <li>Movies</li>
        <li>Imported</li>
        <li>Romance</li>
        <li>Comedy</li>
        <li>Tamil</li>
        <li>Telugu</li>
      </ul>
     </div>

    </section>
  )
}

export default Nav

import React from 'react'
import logo from "../Assets/logo.webp"
// import { DiAptana } from "react-icons/di";

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
      {/* <DiAptana  className='setting'/> */}

     </div>

    </section>
  )
}

export default Nav

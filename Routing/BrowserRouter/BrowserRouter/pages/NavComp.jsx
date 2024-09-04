import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <section>
    <Link to={'/home'}>Home</Link>
    <Link to={'/home'}>Login</Link>
    <Link to={'/home/register'}>Register</Link>
    <Link to={'/home/about'}>About</Link>
    <Link to={'/home/contact'}>Contact</Link>
    
  </section>
  )
}

export default NavComp

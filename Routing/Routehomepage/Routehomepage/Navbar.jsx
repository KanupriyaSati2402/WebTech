import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
      <Link to={'/'}>Home</Link>
      <Link to={'/loginpage'}>Login</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/aboutpage'}>About</Link>
    
    </section>
  )
}

export default Navbar

//to provide address to the linked componet we have {to} props is componet 
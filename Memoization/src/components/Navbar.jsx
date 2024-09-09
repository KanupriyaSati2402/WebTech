import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
 <section>
  <NavLink to={"/login"} className={({isActive})=> (isActive ? "active" :"")}>Login</NavLink>
  <NavLink to={"/register"} className={({isActive})=> (isActive ? "active" :"")}>Register</NavLink>
  <NavLink to={"/about"} className={({isActive})=>(isActive ?"active" :"")}>About</NavLink>
  <NavLink to={"/contact"} className={({isActive})=>(isActive ?"active" :"")}>Contact</NavLink>
 </section>
  )
}

export default Navbar

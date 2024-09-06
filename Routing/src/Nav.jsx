import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   <section className="navbar">
    <div className='logo'></div>
    <div className='links'>
      <NavLink to={"/"} className={({isActive})=> (isActive ? "active" :"")}>Counter1</NavLink>
      <NavLink to={"/counter2"}  className={({isActive})=> (isActive ? "active" :"")}>Counter2</NavLink>

    </div>
   </section>
  )
}

export default Nav

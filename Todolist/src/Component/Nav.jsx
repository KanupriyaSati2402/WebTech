import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <section className='navbar'>
        <div className='logo'></div>
        <div className='links'>
            <NavLink to={"/"} className={({isActive})=> isActive ?"active" :""}>Home</NavLink>
            <NavLink to={"/todolist"} className={({isActive})=> isActive ?"active" :""} >Todolist</NavLink>
            <NavLink to={"/login"} className={({isActive})=> isActive ?"active" :""} >Login</NavLink>
            <NavLink to={"/contact"} className={({isActive})=> isActive ?"active" :""}>Contact</NavLink>
            <NavLink to={"/about"} className={({isActive})=> isActive ?"active" :""}>About</NavLink>

        </div>
    </section>
  )
}

export default Nav

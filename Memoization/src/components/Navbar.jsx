import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillOpenAI } from "react-icons/ai";

const Navbar = ({data:{showCart,setShowCart}}) => {
  return (
 <section className='nav'>
  <div className='logo'><AiFillOpenAI /></div>
  <div className='navbar'>
  <NavLink to={"/login"} className={({isActive})=> (isActive ? "active" :"")}>Login</NavLink>
  <NavLink to={"/register"} className={({isActive})=> (isActive ? "active" :"")}>Register</NavLink>
  <NavLink to={"/about"} className={({isActive})=>(isActive ?"active" :"")}>About</NavLink>
  <NavLink to={"/contact"} className={({isActive})=>(isActive ?"active" :"")}>Contact</NavLink>
  <div className="cart"  onClick={()=>{setShowCart(true)}}></div>
  </div>
 
 </section>
  )
}

export default Navbar

import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiFillOpenAI } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({data:{showCart,setShowCart}}) => {
  return (
 <section className='nav'>
  <div className='logo'>
  <Link to="/">
    <AiFillOpenAI className='zoho'/><strong>ZOHO</strong>
    </Link>
    </div>
  <div className='navbar'>
  <NavLink to={"/login"} className={({isActive})=> (isActive ? "active" :"")}>Login</NavLink>
  <NavLink to={"/register"} className={({isActive})=> (isActive ? "active" :"")}>Register</NavLink>
  <NavLink to={"/about"} className={({isActive})=>(isActive ?"active" :"")}>About</NavLink>
  <NavLink to={"/contact"} className={({isActive})=>(isActive ?"active" :"")}>Contact</NavLink>
  <div className="cart"  onClick={()=>{setShowCart(true)}}><FaCartShopping className='i'/></div>
  </div>
 
 </section>
  )
}

export default Navbar

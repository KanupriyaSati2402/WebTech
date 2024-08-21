import React from "react";
import logo from "../assets/logo.webp"
const Nav =()=>{

    return <section className="nav">
       <img className="logo" src={logo} />
       <ul >
        <li>Beauty</li>
        <li>Home</li>
        <li>Native</li>
        <li><input type="text" placeholder="Cannought Place , New Delhi"/></li>
        <li><input type="text" placeholder="Search For" /></li>
       </ul>
    </section>;
}
export default Nav;
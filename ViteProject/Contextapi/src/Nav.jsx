import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <section className='Nav'>
             <div className='navbar'>
             <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link>Register</Link>
                <Link>Contact</Link>
                <Link>About</Link>


               
              
              </ul>
             </div>
        
            </section>
          )
}

export default Nav

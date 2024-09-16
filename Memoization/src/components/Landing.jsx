import React from 'react'
import { Link } from 'react-router-dom';
// import photo from '../assets/women.jpg';


const Landing = () => {
  return (
    <section className='landing'>
      <div className='page'>
        {/* <img src={photo}/> */}
      <div>
      <h1>YOUR <strong>TRUSTED</strong> E-COMMERCE PLATFORM</h1>
     
      </div>
    <div className="but">
    <Link to="/Login">
    <button>Get Started</button>
    <button className="button">Read More</button>
    </Link>
    </div>
    </div>
    </section>
  )
}

export default Landing

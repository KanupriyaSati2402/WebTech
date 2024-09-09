import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
     <Link to="/Login">
     <button>Get Started</button>
     </Link>
    </section>
  )
}

export default Landing

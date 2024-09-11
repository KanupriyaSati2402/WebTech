import React from 'react'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <section className='landing'>
      <div className='page'>
      <div>
      <h1>WELCOME TO ZOHO</h1>
      <p>
        Zoho Commerce is a cloud-based e-commerce platform that enables
        businesses to set up and manage online stores for selling products like
        clothing, electronics, medical supplies, and household items. Each product can
        be listed with detailed specifications, such as price, dimensions, and
        other key information. While Zoho Commerce currently supports only
        physical products, plans to introduce digital product sales are in
        development. </p>
      </div>
    <div>
    <Link to="/Login">
    <button>Get Started</button>
    </Link>
    </div>
    </div>
    </section>
  )
}

export default Landing

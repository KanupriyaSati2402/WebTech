import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/Landing.jpg"

const Landing = () => {
  return (
    <section className="landing">
      <div className="page">
        <div>
        <img src={landing}/>
        </div>
       
        <div>
          <h1>
            YOUR <strong>TRUSTED</strong> E-COMMERCE PLATFORM
          </h1>
          <p>
            Zoho Commerce is a cloud-based e-commerce platform that enables
            businesses to set up and manage online stores for selling products
            like clothing, electronics, medical supplies, and household items.
          </p>
        </div>
        <div className="but">
          <Link to="/Login">
            <button>Get Started</button>
            <button className="button">Read More</button>
          </Link>
        </div>
        </div>
      
    </section>
  );
};

export default Landing;

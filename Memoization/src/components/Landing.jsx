import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="page">
        <div className="pageImg"></div>
        <div className="content">
          <h1>
            YOUR <strong>TRUSTED</strong> E-COMMERCE PLATFORM
          </h1>
          <p>
            Zoho Commerce is a cloud-based e-commerce platform that enables
            businesses to set up and manage online stores for selling products
            like clothing, electronics, medical supplies, and household items.
          </p>
          <div className="but">
            <Link to="/Login">
              <button className="get">Get Started</button>
              <button className="read">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

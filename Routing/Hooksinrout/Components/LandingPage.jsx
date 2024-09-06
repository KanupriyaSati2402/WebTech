import React from "react";
import { Link } from "react-router-dom";
import photo from '../Assets/photo.jpg'

const LandingPage = () => {
  return (
    <section className="landingpage">
      <div className="container">
        <div className="content">
          <h1 className="wel">Welcome</h1>
          <h3>
            Find Your Calm with Zenify – Your Personal Guide to Mindfulness
          </h3>
          <p>
            Reduce stress, increase focus, and live a more balanced life with
            guided meditation sessions designed for every lifestyle
          </p>
        </div>
          <div>
            <img src={photo} alt="photo" className="photo" />
          </div>
        <Link to="/home">
          <button className="started">Get Started</button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;

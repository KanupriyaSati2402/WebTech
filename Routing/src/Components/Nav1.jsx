import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../Assets/photo1.jpg"

const Nav1 = () => {
  return (
    <section className="Nav">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/home/about">About page</Link>
          </li>
          <li>
            <Link to="/home/contact">Contact</Link>
          </li>
          <li>
            <Link to="/home/login">Login page</Link>
          </li>
          <li>
            <Link to="/home/register">Register page</Link>
          </li>
        </ul>
      </div>
      <article className="content">
      <div className="page">
       <h1>Welcome to Home page !!</h1>
      </div>
      <div className="image">
        <img src={photo1} className="photo1"/>
      </div>
      </article>
    </section>
    
  );
};

export default Nav1;

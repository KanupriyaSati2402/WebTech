import React from "react";
import { Link } from "react-router-dom";
const Nav1 = () => {
  return (
    <section className="Nav">
      <div className="navbar">
        <ul>
          <Link className="link" to="/home/about">About page</Link>
          <Link className="link" to="/home/contact">Contact</Link>

          <Link className="link" to="/home/login">Login page</Link>

          <Link className="link" to="/home/register">Register page</Link>
        </ul>
      </div>
    </section>
  );
};

export default Nav1;

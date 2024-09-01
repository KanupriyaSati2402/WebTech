import React from "react";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <div>
      <Link to="/home/about">About page</Link>
      <Link to="/home/contact">Contact</Link>
      <Link to="/home/login">Login page</Link>
      <Link to="/home/register">Register page</Link>
    </div>
  );
};

export default Nav1;

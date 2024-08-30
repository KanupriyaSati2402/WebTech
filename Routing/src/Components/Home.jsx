import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/home/about">About page</Link>
      <Link to="/home/contact">Contact</Link>
      <Link to="/home/login">Login page</Link>
      <Link to="/home/register">Register page</Link>

      
      <Outlet />
    </div>
  );
};

export default Home;

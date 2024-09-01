import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "./Nav1";

const Home = () => {
  return (
    <div className="home">
    <Nav1 className="navbar1" />
      <Outlet />
    </div>
  );
};

export default Home;

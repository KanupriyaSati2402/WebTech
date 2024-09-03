import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "./Nav1";
import photo1 from "../Assets/photo1.jpg";

const Home = () => {
  return (
    <div className="home">
      <Nav1 className="navbar1" />
      <div className="image">
        {/* <img src={photo1} className="photo1" /> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

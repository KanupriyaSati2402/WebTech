import React from "react";
import logo from '../asset/logo.webp'
const Nav = () => {
  return (
    <section className="Nav">
      <div className="logo">
      <img className="logo" src={logo} />
      </div>
      <div className="NavDetails">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Contact</li>
          <li>SignIn</li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;

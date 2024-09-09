import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar';
import Aside from './Aside';
import { AiFillOpenAI } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <Nav/>
      <Aside/>
      <Outlet/>
    </div>
  )
}

export default Home

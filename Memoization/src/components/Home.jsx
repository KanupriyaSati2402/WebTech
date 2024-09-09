import React from 'react'
import { Outlet } from 'react-router-dom';

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

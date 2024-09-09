import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../pages/NavComp'


const Home = () => {
  return (
    <div>
         {<NavComp/>}
        <Outlet/>
      
    </div>
  )
}

export default Home

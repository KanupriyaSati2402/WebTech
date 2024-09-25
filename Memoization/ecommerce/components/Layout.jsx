import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   
    <div>
       <Toaster/>
      <Outlet/>
    </div>
  )
}

export default Layout

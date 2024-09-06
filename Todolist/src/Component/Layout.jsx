import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {

  return (
    <section>
        <Toaster/>
        <Nav/>
        <Outlet/>
    </section>
  )
}

export default Layout

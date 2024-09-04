import React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import NavComp from '../pages/NavComp'

const Layout = () => {
  return (
    <section>
  
    <Outlet/>
    </section>
  )
}

export default Layout

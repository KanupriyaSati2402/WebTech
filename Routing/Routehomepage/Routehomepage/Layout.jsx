import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <section>
    <Navbar/>
    <Outlet/>

   </section>
  )
}

export default Layout

//to accessing ht echldren we have componets outlet, layout is parent , and childrens are n layout so
// to accessing the children we have one componet is outlet

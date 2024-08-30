import React from 'react'
import Layout from './Layout';

const Layout = () => {
  return (
  <section>
    <Nav/>
  {/* Outlet is used to access the children component  */}
  <Outlet/> 
   
  </section>
  )
}

export default Layout

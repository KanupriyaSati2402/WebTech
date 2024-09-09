import React from 'react'
import { Link } from 'react-router-dom'

const NavProduct = () => {
  return (
    <div>
      
      <Link to={'/product/product1'}>Product1</Link>
      <Link to={'/product/product2'}>Product2</Link>
    </div>
  )
}

export default NavProduct

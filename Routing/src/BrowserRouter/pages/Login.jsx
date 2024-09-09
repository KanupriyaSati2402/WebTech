import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      Login
      <Link to={'/product'}>Product</Link>
    </div>
  )
}

export default Login

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './component/Landingpage'
import Layout from './component/Layout'
import Home from './component/Home'
import Product from './component/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Product1 from './component/Product1'
import Product2 from './component/Product2'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Landingpage/>}/>

    <Route path='/home' element={<Home/>}>
    <Route path='/home' element={<Login/>}/>
    <Route path='/home/register' element={<Register/>}/>
    <Route path='/home/about' element={<About/>}/>
    <Route path='/home/contact' element={<Contact/>}/>
    </Route>
    
    <Route path='/product' element={<Product/>}>
    <Route path='/product/product1' element={<Product1/>}/>
    <Route path='/product/product2' element={<Product2/>}/>
    </Route>

    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

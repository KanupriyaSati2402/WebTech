import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter> 
    <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/loginpage'element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/aboutpage' element={<About/>}/>
    <Route/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

// if we have children we will wrape 
// in route 2 thing , path :-it can be anything
// element:- to define the element we have element we pass which element ypu want to display
//these router are present in react routert lybriries
//all components wrapes in routes
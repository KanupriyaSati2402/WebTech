import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import About from './About'
import Loginpage from "./Loginpage"
import Register from "./Register"
import Contact from "./Contact"
import Home from './Home';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    {/* <Route/> // when we have to use paired tag ( if parent then both tag ) and if children then single */}
    <Route path="/loginpage" element={<Loginpage/>}/> 
    {/* // this path can be anything  */}
    {/* element will take the value which is have to display  */}
    <Route path="/register" element={<Register/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<Home/>} />
    </Route>
    </Routes>
    </BrowserRouter> // parent for complete routing 
  )
}

export default App

//--this is BrowserRouter 
//-- when the navbar is same for every page then we will be using this one 

//-- if we want to make a landing page and when clicking on get started takes us to a main page and inside which nav bar is different from onther pages than they have relationship that is sibling 

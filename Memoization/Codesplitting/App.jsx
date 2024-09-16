//TOPIC - CODE SPILTTING 


import React from 'react'
import Home from './Home'
import Container1 from './Container1'
import { Suspense } from 'react'
let Container2=React.lazy(()=>import( './Container2'))
// lazy is a inbuilt method in react , which takes a call back func
//in that callback function we will import the component which we need to 
//make lazy .
const App = () => {
  return (
   <section>
    {/* <Home></Home>
    <Container1></Container1> */}
    <Suspense  fallback={<div>Loading ....</div>}>
        <Container2/>
    </Suspense> 

    {/* it is a wrapper for that lazy compnent and we have a fallback 
    prop to show the the data at the time of loading 
    -- we can make makinglazy functions , but new for each component  */}

   </section>
  )
}

export default App

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// in redux to access state we have useselector hook 
const Counter1 = () => {
    //useselector is used to access state value
   let count=  useSelector((state)=>state?.counter1.count) // optional chaining
   //in redux by default it used usereducer hook and we have dispatcher for upfdation and for this we have a hook 
   let dispatch=useDispatch(); // to create dispatcher
   return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
    </div>
  )
}

export default Counter1

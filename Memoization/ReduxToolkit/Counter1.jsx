import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './CounterSlice'


const Counter1 = () => {
   let data= useSelector((state)=>state?.count)
   let disptach =useDispatch();
   console.log(data)
  return (
    <div>
      <p>{data}</p>
      <button onClick={()=>{disptach(increment())}}>Increment</button>
    </div>
  )
}

export default Counter1


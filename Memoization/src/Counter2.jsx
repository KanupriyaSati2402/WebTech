import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment2,decrement2} from "./CounterSlice2"

const Counter2 = () => {
    let data = useSelector((state)=>state?.counter2?.count)
    let dispatch = useDispatch();
    return (
        <div>
          <p>{data}</p>
          <button onClick={()=>{dispatch(increment2())}}>Increment2</button>
          <button onClick={()=>{dispatch(decrement2())}}>Decrement2</button>
        </div>
  )
}

export default Counter2

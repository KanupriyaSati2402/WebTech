import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchdata, fetchdata2} from "./CounterSlice1"

const Counter = () => {
    let data = useSelector((state)=>state)
    let dispatch = useDispatch();
    console.log(data)
    return (
        <div>
          {/* <p>{data}</p> */}
          <button onClick={()=>{dispatch(fetchdata())}}>FetchData</button> {/* // we want to fetch data  */}
          <button onClick={()=>{dispatch(fetchdata2())}}>Fetchdata2</button>
        </div>
  )
}

export default Counter

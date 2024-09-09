import React, { useContext } from 'react'
import { globalVar } from './GlobalContext'


const Counter1 = () => {
  let {counter1,setCounter1} = useContext(globalVar)
  return (
    <div>
      <p>Counter 1 :{counter1}</p>
      <button onClick={()=>{setCounter1(counter1+1)}}>Increment</button>
      <button onClick={()=>{setCounter1(counter1-1)}}>Decrement</button>
      <button onClick={()=>{setCounter1(0)}}>Reset</button>
    </div>
  )
}

export default Counter1

// react useEffect Hooks 
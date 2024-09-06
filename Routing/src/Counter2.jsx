import React, { useContext, useEffect } from 'react'
import { globalVar } from './GlobalContext'



const Counter2 = () => {
  let {counter2,setCounter2,counter3,setCounter3} = useContext(globalVar);
  useEffect(()=>{
    //when we are not passing any dependency inside useEffect it will work as render()
    //when we put a [] in dependency inside useEffect it will work as componentdidmount()
    //when we put a [value] in dependency inside useEffect it will work as componentdidUpdate()
    //by using useEffect we can achieve one more event that componentwillunmount
    // in useEffect use return and in that use a function
    console.log("Hello")
    return ()=>{
      console.log("bye")
    }
    //it will execite at the time or counter3 also for this we will make another useeffect , we can use multiple useEffect 
  },[counter3])
  return (
    <div>
      <p>Counter2 :{counter2}</p>
      <button onClick={()=>{setCounter2(counter2+1)}}>Increment</button>
      <button onClick={()=>{setCounter2(counter2-1)}}>Decrement</button>
      <button onClick={()=>{setCounter2(0)}}>Reset</button>

      <p>Counter3 :{counter3}</p>
      <button onClick={()=>{setCounter3(counter3+1)}}>Increment</button>
      <button onClick={()=>{setCounter3(counter3-1)}}>Decrement</button>
      <button onClick={()=>{setCounter3(0)}}>Reset</button>
    </div>
  )
}

export default Counter2


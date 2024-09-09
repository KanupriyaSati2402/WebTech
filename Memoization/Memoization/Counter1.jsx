import React, { useContext } from 'react'
import {globalVar} from './GlobalContextApi';

const Counter1 = () => {
    let {Counter1,setCounter1}=useContext(globalVar);

    let evenOdd=()=>{
        if(Counter1%2===0){
            return "Even";
            } else{
                return "Odd";
            }

    }
  return (
    <div>
      <p>Counter:{Counter1} --- {evenOdd()}</p>
      <button onClick={()=>{setCounter1(Counter1+1)}}>Increment</button>
      <button onClick={()=>{setCounter1(Counter1-1)}}>Decrement</button>
      <button onClick={()=>{setCounter1(0)}}>Reset</button>
    </div>
  )
}

export default Counter1

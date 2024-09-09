import React, { useContext, useMemo } from 'react'
import {globalVar} from './GlobalContextApi';

const Counter2 = () => {
    let {Counter2,setCounter2}=useContext(globalVar); // do using state 
//method and variable name should be in camelcase 
    // let evenOdd=()=>{
    //     if(Counter2%2===0){
    //         return "Even";
    //         } else{
    //             return "Odd";
    //         }
    //     } expensive function 

let evenOdd=useMemo(()=>{
    let i=0;
    while(i<300000000) i++;

    if(Counter2%2===0){
        return "Even";
        } else{
            return "Odd";
        }
},[Counter2]);


  return (
    <div>
       <p>Counter2:{Counter2}--- {evenOdd}</p>
      <button onClick={()=>{setCounter2(Counter2+1)}}>Increment</button>
      <button onClick={()=>{setCounter2(Counter2-1)}}>Decrement</button>
      <button onClick={()=>{setCounter2(0)}}>Reset</button>
    </div>
  )

}
export default Counter2

// to not effect the website performance memoization is used 
// jis bhi wjh se website slow hogi to overcome that 
// it is a powerful optimization technique used in React to improve the performance of application
// by caching the results of expensive function calls and returning the cached result
// when the same inputs occur again 
// in first time the expensive function result will be stored inside cahche memory 
// so in second time it will take the data from the cache memory which will not take much time 

//in React we can achieve it by 3 methods 
//1.React.memo -- older pattern , we are npt using it 
//2.useMemo()
// it is a hook that will accept two parameters (callback func,dependency)
//-- will return one single value
// -- when we want to print on display
//3.useCallback() 
//same syntax
//--will return function 
//-- onclick function we pass a function 

// -- AJAX -- Asynchronous Js and XMl
//-- XMR XHR
//--Hot model replacement 
// -- methods like open method 
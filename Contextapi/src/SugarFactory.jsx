import React, { createContext, useState } from 'react'
export let globalVar = createContext(""); // global variable it will have provider  ( global is just a name)
const SugarFactory = ({children}) => {
    let { Provider } = globalVar ; // destructing provider from global varaiable 
    //Provider is inbuilt 
    let [sugar1,setSugar1] = useState(100);
    let [sugar2,setSugar2] = useState(200);
    let [sugar3,setSugar3] = useState(300);
  return <Provider value={{sugar1,sugar2,sugar3}}>{children}</Provider> //we will use provider as a element inside return 
   // value is in built we have to use it as it is , inside it will pass the value we have to provide
} // after return we have to put under () or in same line 

export default SugarFactory


// last step is to built connection 
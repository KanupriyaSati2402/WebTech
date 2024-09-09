import React, { createContext, useState } from 'react'


export let globalVar =createContext();
const GlobalContext = ({children}) => {
    let {Provider}= globalVar
    let [counter1,setCounter1]=useState(0);
    let [counter2,setCounter2]=useState(0);
    let [counter3,setCounter3]=useState(0);

  return <Provider value={{counter1,counter2,setCounter1,setCounter2,counter3,setCounter3}}>{children}</Provider>
  
}

export default GlobalContext

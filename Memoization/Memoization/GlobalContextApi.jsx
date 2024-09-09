import React, { useState, createContext } from 'react'


export let globalVar =createContext();
const GlobalContextApi = ({children}) => {
    let {Provider}= globalVar
    let [Counter1,setCounter1]=useState(0);
    let [Counter2,setCounter2]=useState(0);
  return <Provider value={{Counter1,Counter2,setCounter1,setCounter2}}>{children}</Provider>
  
}

export default GlobalContextApi

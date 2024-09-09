import React, { createContext } from 'react'


export let globalVar =createContext();
const GlobalContext = ({children}) => {
    let { Provider } = globalVar;
  return (
    <Provider value={{}}>{children}</Provider>
  )
}

export default GlobalContext

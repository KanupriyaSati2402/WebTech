import React, { createContext, useState } from 'react'

export let globalVal=createContext();
const GlobalContext = ({children}) => {
let {Provider} =globalVal;
let [todolist,setTodolist]=useState([])

let handleTodo=(data)=>{
    setTodolist([...todolist,data])// destructing old one and adding new one iniside it 
}
return <Provider value={{todolist,setTodolist,handleTodo}}>{children}</Provider>
}

export default GlobalContext

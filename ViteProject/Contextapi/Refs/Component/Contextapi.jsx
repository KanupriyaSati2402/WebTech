import React from 'react'
import { createContext } from 'react'

let globalVar=createContext();
const Contextapi = ({children}) => {
    let {Provider} = globalVar;
    let contRef1=useRef();
    let contRef2=useRef();
    let contRef3=useRef();

    let handleColor=()=>{
        contRef1.current.style.backgroundColor="Red"
        contRef2.current.style.backgroundColor="Yellow"
        contRef3.current.style.backgroundColor="Green"
    }
  return (
    <Provider value={{contRef1,contRef2,contRef3}}>{children}</Provider>
  )
}

export default Contextapi

//-- find 


//-- Form Handling -- it is nothing but the way of handling the form data 
//-- in react we will handle the form using two ways 
//-- controlled component
//-- uncontrolled component 
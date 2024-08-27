import React from 'react'
import { useState } from 'react'
import HomePage from './HomePage'

const Login = () => {
    let [login,setLogin]=useState(false)
    return(
        <div>
            <button onClick={()=>{setLogin(!login)}}>{login ? "LogOut" : "Login"}</button>
            {login && <HomePage/>} 
        </div>
    )
 
}

export default Login
// short circuit  
//--only if is there no else
//-- condition and operator whatever we want to show 

//conditional Rendering 
//--if 
//--if else
//--Else if ladder
//--Switch 
//--Ternary 
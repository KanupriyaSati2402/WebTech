import React ,{useState} from 'react'
import toast from "react-hot-toast"

const Weather = () => {
    let[login,setLogin]= useState(false);
    let handleLogin=()=>{setLogin(!login)}
  if(login){
    toast.success("User Logined Successfully")
    return <button onClick={handleLogin}>Logout</button> 
    // if the logic value is true than we can put it inside false using !logic 
  }
  else{
    toast.success("User Logout Successfully")
    return <button onClick={handleLogin}>Login</button>
    //toast is used to give notification from reat hot toast libaray
  }
}

export default Weather

//writing this setLogin(!logic)} again is not good so we will make a function and run it multiple times 
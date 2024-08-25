import React, { useState } from 'react'
import Child from './Child'
const Parent= ({da:{details,setDetails}}) => {
    let [credentials , setCredentials] = useState({
        empName:"Prasad",
        salary:50000,
    });
  return (
    <div>
      {<Child data ={{credentials,setCredentials,details,setDetails}} /> /* first is jsx expression and second one is { } */}
      {/* props used  
      if we want to pass multiple values pass it inside { } separted by ,*/}
    </div>
  )
}
export default Parent;
//props -- used to share data from parent component to child component 
//-- props are property 
//syntax == props name ={props value}

//props drilling -- process of transferring the 
//data from outer most component to inner most component is known as drilling
//to avoid props drilling we have context API 

//techniques to manage state 
//for managing the state we have state management 3 things 
//1.redux ( more in demand )
//2.context api 
//3.flux 
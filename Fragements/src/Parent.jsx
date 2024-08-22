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

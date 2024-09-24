import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const AgeCalculator = () => {
    let agevalue =useSelector((state)=>state?.agecal.age)
    let dispatch=useDispatch(); // to create dispatcher
    return (
     <div>
       <p>{agevalue}</p>
       <button onClick={()=>{dispatch({type:"Ageincrement",payload:"velocitai"})}}>Age Increment</button>
     </div>
   )
}

export default AgeCalculator


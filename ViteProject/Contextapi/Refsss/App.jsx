import React, { useState } from 'react'
import toast,{Toaster} from "react-hot-toast"

const App = () => {
    let[data,setData]=useState({
        userName:"",
        password:"",
        email:"",
        gender:"",
        add:"",
        contact:""

    })
    let handleChange =(e)=>{
//  e--cross-brwoser-object inside this we have a target property 
// console.log(e.target.value)
// console.log(e.target.name)
    let{name,value}= e.target;
setData({...data,[name]:value})

    }
console.log(data)
    let handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault();
       toast.success("Form is Submitted")
    }
  return <section>
    <Toaster/>
 <form onSubmit={handleSubmit}>
 <div>
   <label>Username : </label>
   <input type='text' name="userName"  onChange={handleChange} />
   </div>
   <div>
   <label>Password : </label>
   <input type='text' name="password" onChange={handleChange} />
   </div>
    <div>
    <label>Email : </label>
    <input type='text'name="email" onChange={handleChange} />
    </div>
    <div onChange={handleChange}>
    <label htmlFor='gender'>Gender: </label>
    <input type="radio" name="gender" id="" value="male"/>
    <label htmlFor='gender'>Male</label>
    <input type="radio" name="gender" id="" value="male"/>
    <label htmlFor='gender'>Female</label>
    <input type="radio" name="gender" id=""value="male" />
    <label htmlFor='gender'>Other</label>
    </div>
    <div>
    <label>Adress : </label>
    <textarea name="add" id="" onChange={handleChange}></textarea>
    </div>
   <div>
   <label type='tel'/>Contact No: 
   <input type="tel" name="contact" onChange={handleChange}/>
   </div>
   <button>Submit</button>
 </form>

  </section>
    
  
}

export default App


//Event handling 
//-- the process of handling the events is called event handling 
//-- in js we have learnt Dom-event -- they will interact with real dom 
//-- events are in lowercase 
//-- for some of the other browsers name is different 
//-- in react we have synthetic event -- they will interact with virtual dom 
//-- compatable with all the browsers 
//-- event names are in camel case 


// for storing all the data of the form 
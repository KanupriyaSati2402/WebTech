import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  let Navigate = useNavigate();
  let data1 = useLoaderData(); // for loading the data while navigating 
  console.log(data1); // we have destructed there so we will get the array only 

  let [data,setData]=useState({ 
    //updator function it is used to update the particular state 
    // first one is state name to store data 
    //we pass anything , we are taking object because there are multiple value
    username:"", 
    password:"",
    // dont take key as name because it is already defined 
    // key name should be in lowercase
});

let {username,password} = data; // destructing to access them 

let handleChange=(e)=>{ //  cross browser object , will point to the particular element jispe event trigger hora h 
  // we are using e.target.name to get the name of the input field
// inside it we have target object inside which we have name and value (hame yahi chaiye)
let {name,value}=e.target;
// we have destructed it for getting the value 
setData({...data,[name]:value})
 // kuki hame already stored value chaiye tabhi hame isko ek array mai wrap kiya h 
// ek time pe ek hi cheez rhegi lekin hame dono chaiye 
}
// console.log(username);
let handleSubmit =(e)=>{
e.preventDefault();
let ValidUser = data1.find((ele)=>{
  return ele.username===username && ele.password===password;
});
if(ValidUser){
  toast.success("Login Successfull");
  setTimeout(()=>{
    Navigate("/home")
  },2000)
}
else{
  toast.error(" User Not Found")
}

}
  return (
    <section  className="login">
      <form className="loginpage">
       <div>
       <label>Username : </label>
       <input type="text" name="username" id="" onChange={handleChange}/> {/* write the property names inside name in input  */}
       </div>
       <div>
       <label>Password : </label>
        <input type="password" name="password" id="" onChange={handleChange}/>
       </div>
       <button onChange={handleChange} onClick={handleSubmit}>Submit</button>
    
      </form>
      {/* <Link to={'/home'}>
      <button className="home">Home</button></Link> */}
    </section>
  );
};

export default LoginPage;

// data1.map((ele,i)=>{
//   if(ele.username==username){
//    if(ele.password==password){
//    return  toast.success("Login Successfully")
//    }
//   }
//   else{
//   return toast.error("username does not match");
//   }
// })

// axios methods 
// 1.get -- to fetch the data from database 
// 2.post 
// 3.put
// 4.delete
// 5.patch
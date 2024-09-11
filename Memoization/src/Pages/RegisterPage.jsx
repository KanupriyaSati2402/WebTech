import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const RegisterPage = () => {
  let Navigate = useNavigate()
  let[user,setUser]=useState(
    {
      username:"",
      password:"",
      email:"",
      phone:"",
    }
  );
  let {username,password,email,phone} =user;

  let handleChange=(e)=>{
   let {name,value} = e.target;
   setUser({...user,[name]:value})
  }
  
  let handleSubmit = (e)=>{
    console.log("data")
    e.preventDefault();
    if(username !="" && password !=""){
      axios.post("http://localhost:5000/Credentials",user)
      toast.success("Registered Successfully")
      setTimeout(()=>{
       Navigate("/")
      },2000)
    }

  }
  console.log(user)
  return (
    <section  className="login">
    <form className="loginpage" onSubmit={handleSubmit}>
     <div>
     <label>Name : </label>
     <input type="text" name="username" id="" onChange={handleChange}/> {/* write the property names inside name in input  */}
     </div>
     <div>
     <label>Email : </label>
      <input type="email" name="email" id="" onChange={handleChange} />
     </div>
     <div>
     <label>Phone Number: </label>
      <input type="tel" name="phone" id="" onChange={handleChange} />
     </div>
     <div>
     <label>Password : </label>
      <input type="password" name="password" id="" onChange={handleChange} />
     </div>
     <button >Submit</button>
    </form>
    {/* <Link to={'/home'}>
    <button className="home">Home</button></Link> */}
  </section>
  )
}

export default RegisterPage;

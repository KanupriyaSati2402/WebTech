import React, { useState } from "react";

const LoginPage = () => {
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
console.log(username);

  return (
    <section>
      <form className="loginpage">
       <div>
       <label>Username : </label>
       <input type="text" name="username" id="" onChange={handleChange}/> {/* write the property names inside name in input  */}
       </div>
       <div>
       <label>Password : </label>
        <input type="password" name="password" id="" onChange={handleChange}/>
       </div>
       <button onChange={handleChange}>Submit</button>
      </form>
    </section>
  );
};

export default LoginPage;

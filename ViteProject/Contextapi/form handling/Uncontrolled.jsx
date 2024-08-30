import React from "react";
import {useRef} from 'react'

const Uncontrolled = () => {
    let contref1=useRef();
    let contref2=useRef();
    let contref3=useRef();


    let handleChange =(e)=>{
    console.log(contref1.current.value)
    console.log(contref2.current.value)
    console.log(contref3.current.value)

    e.preventDefault();


    }
    console.log(contref1);
  return (
    <section>
        <form onSubmit={handleChange}>
      <div>
        <label>Username : </label>
        <input type="text" name="userName" ref={contref1} onSubmit={handleChange}/>
      </div>
      <div>
        <label>Password : </label>
        <input type="text" name="password" ref={contref2} onSubmit={handleChange} />
      </div>
      <div>
        <label>Email : </label>
        <input type="text" name="email" ref={contref3} onSubmit={handleChange}/>
      </div>
      <button>Submit</button>
      </form>
    </section>

  );
};

export default Uncontrolled;
 
//-- event, state-- Controlled 
//-- refs -- uncontrolled (we control uncontrolled using refs)

//--routing -- 
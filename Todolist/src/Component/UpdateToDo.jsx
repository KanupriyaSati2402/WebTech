import React, { useState } from 'react'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { globalVal } from '../globalcontext/GlobalContext';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateToDo = () => {
  let {state} =useLocation();
  let navigate=useNavigate();
  console.log(state)
    let date=new Date();
   let {handleTodo}= useContext(globalVal)
    let [store,setStore]=useState(state); // to store the data 

    let handleChange=(e)=>{ // e is cross browser object 
       let {name,value}=e.target;

       setStore({...store,[name]:value}) ;
    }
   let handleSubmit=(e)=>{
       toast.success("Todo is created !!")
       e.preventDefault();
       handleTodo(store)
       setStore({
        title:"",
        des:"",
    });
    navigate("/");
   }
    console.log(store)
  return (
   <section className='form'>
    <h1>Create To do </h1>
    <form onSubmit={handleSubmit}>
        <div className='form-grp'>
          <label>Title</label>
          <input type="text" name="title" id="" onChange={handleChange} value={store.title}/>
        </div>
        <div className='form-grp'>
          <label>Description : </label>
          <textarea name="des" id="" onChange={handleChange} value={store.des}/>
        </div>
        <button>Submit</button>
    </form>
   </section>
  )
}

export default UpdateToDo

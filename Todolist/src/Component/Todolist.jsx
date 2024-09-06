import React, { useContext } from "react";
import { globalVal } from "./../globalcontext/GlobalContext";
import UpdateToDo from './UpdateToDo';
import { useNavigate } from "react-router-dom";

const Todolist = () => {
    let navigate=useNavigate()
  let { todolist ,setTodolist} = useContext(globalVal);

  let handleDelete=(index)=>{
     let filteredArr= todolist.filter((ele,i)=>i!==index)
     setTodolist(filteredArr);
  }
  let handleUpdate=(ele,index)=>{
    handleDelete(index);
      navigate("/UpdateToDo",{state:ele});
  }
  return (
    <section>
      {todolist.map((ele, i) => {
      return  <div className="card">
          <p>Date: {ele.date}</p>
          <p>Title: {ele.title}</p>
          <p>Description{ele.des}</p>
          <button className="Updatebtn" onClick={()=>{handleUpdate(ele,i)}}>Update</button>
          <button className="deletebtn" onClick={()=>{handleDelete(i)}}>Delete</button>
        </div>; // we are using arrow function inside event when we have a parametrised function 
      })}
    </section>
  );
};

export default Todolist;

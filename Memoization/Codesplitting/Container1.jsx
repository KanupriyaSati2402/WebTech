import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Container1 = () => {
    let [data,setData]=useState([]);



    useEffect(async ()=>{
     let {data}= await axios.get("https://api.github.com/users");
     console.log(data)

     setData(data);
    },[])
  return (
   <section className="home">
  {data?.map((ele)=>{
    return <div className="cards">
        
    </div>
  })}
   </section>
  )
}

export default Container1;
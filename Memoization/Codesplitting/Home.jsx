import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    let [data,setData]=useState([]);



    useEffect(async ()=>{
     let {data}=await axios.get("https://api.github.com/users");
     console.log(data)

     setData(data);
    },[])
  return (
   <section className="home">
  {data?.map((ele)=>{   {/*? -- optional chaining */}
    return <div className="cards">

    </div>
  })}
   </section>
  )
}

export default Home

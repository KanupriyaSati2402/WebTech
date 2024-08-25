import React from 'react'
import new1 from "../assets/new1.webp"
import new2 from "../assets/new2.webp"
import new3 from "../assets/new3.webp"
import new4 from "../assets/new4.webp"
import new5 from "../assets/new5.webp"
import new6 from "../assets/new6.webp"
import new7 from "../assets/new7.webp"


const New = () => {
    let n= [new1,new2,new3,new4,new5,new6,new7];
  return  <section className='new'> 
    {n.map((ele,i)=>{
     return <div className='newcard' key={i}>
        <img className='imgnew' src={ele}/>
      </div>
    })}
    </section>
  
}

export default New

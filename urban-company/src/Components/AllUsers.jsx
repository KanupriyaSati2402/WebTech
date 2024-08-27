import React from 'react'
import { useContext } from 'react'
import { globalVar } from '../../../ContextApiSec/src/Components/ContextApi'

const AllUsers = () => {
    let data= useContext(globalVar)
  return (
   <section className='container'>
    {data.map((ele,i)=>{
        return <div className='card' key={i}>
           <img src={ele.image} className='img' />
           <h1>{ele.Title}</h1>
           <p>{ele.Rating}</p>
           <p>{ele.Price}</p>
        </div>
    })}
   </section>
  )
}

export default AllUsers

import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
 /*  let data= useLocation(); */ //it is use to access the data at the time of navigation , ex login the facebook , 
  //after the  login data is here so the data how can show  on bcz of uselocAtion .
   let navigate= useNavigate();
  let{
    state: {credentials, data},
  } = useLocation();
  console.log(data);

  let id = useParams();
  let handleData=(ele)=>{
    navigate(`/viewmore/${ele.id}`, {state: ele});
  }

  return (
    <section className='products'>
      {data.map((ele, i)=>{
        return <div key={i+1} className='cards'>
          <img src={ele.avatar_url} alt="" />
          <h2>{ele.login}</h2>
          <p>{ele.id}</p>
          <button className='btn' onClick={()=>{handleData(ele)}}>View More</button>
          <button className='btn1'>Update</button>
          <button className='btn2'>Delete</button>
        </div>

      })}
      
    </section>
  )
}

export default Product

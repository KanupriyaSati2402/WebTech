import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CartsComp = ({data:{showCart,setShowCart}}) => {
  let [cartData,setCartData] =useState([]);
  let handleClose=(e)=>{
   e.stopPropagation();
   setShowCart(false);
  }
useEffect(()=>{ // we can't make the function inside useEffect async 
  let func=async()=>{
   let {data}= await axios.get("http://localhost:5000/Cart")
   setCartData(data);
  }
  func();
},[]) 


  return (
    <section className='cartComp'  onClick={handleClose}>
        <article className='cartMain' onClick={(e)=>{e.stopPropagation(),setShowCart(true)}} >
          <button  onClick={handleClose}>Close</button>
          {cartData.length < 1 ? "Cart is Empty" : cartData.map((ele,i)=>{
           return <div>
            <h1>{ele.title}</h1>
           </div>
          }) }
        </article>
    </section>
  )
}

export default CartsComp


//optional chaining 
// -- when there is something undefined and we are wanting to access it that time we give get an error 
// which will be undefined and ui will be crashed 
//  how to do this chaining by putting one ?
 
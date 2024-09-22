import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { globalVar } from '../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const CartsComp = ({data:{showCart,setShowCart}}) => {
  let navigate = useNavigate();        
  let {cartData,setCartData,deleteCount,setDeleteCount}=useContext(globalVar)
 
  let handleClose=(e)=>{
   e.stopPropagation();
   setShowCart(false);
  }

  let removeCartItem=async (id)=>{
    await axios.delete(`http://localhost:5000/Cart/${id}`);
    setDeleteCount(deleteCount+1);

  }
   
  let totalPrice=cartData.map((ele)=>{
    let {price}=ele;
    return Math.round(price * 83.930);
  })?.reduce((acc,cnVal)=>{return acc+cnVal},0)
  
  let proceedPayment=()=>{
   navigate("/payment",{state:totalPrice}); 

  }

  return (
    <section className='cartComp'  onClick={handleClose}>
        <article className='cartMain' onClick={(e)=>{e.stopPropagation(),setShowCart(true)}} >
         <div > <button className="btn" onClick={handleClose}>Close</button></div>
          {cartData.length < 1 ? "Cart is Empty" : cartData.map((ele,i)=>{
           return <div className='cart-items'>
            <h2>{ele.title}</h2>
            <img  className="item-image"src={ele.image}/>
            <button className="Remove-btn" onClick={()=>{removeCartItem(ele.id)}}>Remove Item</button>
           </div>
          }) }

          <article className="cartBill">
            <h1>Total Bill</h1>
            <p>Price:{totalPrice} Rs</p>
            <button onClick= {proceedPayment} >Proceed for Payment</button>

          </article>
        </article>
    </section>
  )
}

export default CartsComp



// with navigate we can pass data also by using a predefined keyword called state 

//optional chaining 
// -- when there is something undefined and we are wanting to access it that time we give get an error 
// which will be undefined and ui will be crashed 
//  how to do this chaining by putting one ?
 
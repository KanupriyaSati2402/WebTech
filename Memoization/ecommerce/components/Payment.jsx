import React from 'react'
import { AiFillPicture } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'

const Payment = () => {
   let {state}= useLocation();
   console.log(state.price)
  return (
    <section className=''>
   <h1>Total Price : {Math.round(state.price * 83.930)} Rs</h1>
    </section>
  )
}

export default Payment

// get -- one parameter only the api 
// delete -- delete the record  , give only the id 

// below once will accept 2 parameters , api and data 
// post -- when we want to send data into the db 
// put -- when we have to change all the values then we use put 
// patch --when we want to change only one data 
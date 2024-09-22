import React, { useState } from 'react'
import Portal from './Portal'
import { createPortal } from 'react-dom';

const App = () => {
    let [popup,setPopup]=useState(false);
  return <section className='sec'>
   <button onClick={()=>{
    setPopup(true);
   }}>
    Open popup
   </button>
   {popup && createPortal(<Portal/>,document.querySelector("body"))}
  </section>

  
}

export default App

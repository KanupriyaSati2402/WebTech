import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar';
import Aside from './Aside';
import { AiFillOpenAI } from "react-icons/ai";
import CartsComp from './CartsComp';
import { globalVar } from '../Context/GlobalContext';
import AddProduct from './AddProduct';

const Home = () => {
  let {addProductPanel,setAddProductPanel} =useContext(globalVar)
    let [showCart,setShowCart]=useState(false);
  return (
    <div className='homepage'>
      {addProductPanel && <AddProduct/>}
        {showCart && <CartsComp  data={{showCart,setShowCart}}/>}
      <Nav data={{showCart,setShowCart}}/>
      <section className='display'>
      <Aside/>
      <div className="homeChildren">
      <Outlet/>
      </div>
    
      </section>
     
    </div>
  )
}

export default Home

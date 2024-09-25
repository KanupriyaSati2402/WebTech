import React, { useContext } from 'react'
import HouseHold from './../Product/HouseHold';
import { NavLink } from 'react-router-dom';
import { globalVar } from '../Context/GlobalContext';

const Aside = () => {
  let{addProductPanel,setAddProductPanel,loginType} =useContext(globalVar);
  return (
    <div className='aside'>
  <NavLink to={"/home/household"} className={({isActive})=> (isActive ? "active" :"")}>HouseHold</NavLink>
  <NavLink to={"/home/medical"} className={({isActive})=> (isActive ? "active" :"")}>Medical</NavLink>
  <NavLink to={"/home/electrical"} className={({isActive})=>(isActive ?"active" :"")}>Electrical</NavLink>
  <NavLink to={"/home/beauty"} className={({isActive})=>(isActive ?"active" :"")}>Beauty</NavLink>
  <NavLink to={"/home/clothing"} className={({isActive})=>(isActive ?"active" :"")}>Clothing</NavLink>
  {/* <li><button className="" onClick={()=>{setAddProductPanel(true)}}>Add Product</button></li> */}
  {
    loginType == 'Admin' && <li><button className="" onClick={()=>{setAddProductPanel(true)}}>Add Product</button></li>
      
  }
    </div>
  )
}

export default Aside

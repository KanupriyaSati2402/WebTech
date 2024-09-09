import React from 'react'
import HouseHold from './../Product/HouseHold';

const Aside = () => {
  return (
    <div>
      <NavLink to={"/home/household"} className={({isActive})=> (isActive ? "active" :"")}>HouseHold</NavLink>
  <NavLink to={"/home/medical"} className={({isActive})=> (isActive ? "active" :"")}>Medical</NavLink>
  <NavLink to={"/home/electrical"} className={({isActive})=>(isActive ?"active" :"")}>Electrical</NavLink>
  <NavLink to={"/home/beauty"} className={({isActive})=>(isActive ?"active" :"")}>Beauty</NavLink>
    </div>
  )
}

export default Aside

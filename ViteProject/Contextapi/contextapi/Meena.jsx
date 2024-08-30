import React, { useContext } from 'react'
import {globalVar} from './SugarFactory'

const Meena = () => {
    let data= useContext(globalVar); // meena wants sugar 1 so we will destruct the data into sugar1
    console.log(data);
  return (
    <div className='meena'>
      
    </div>
  )
}

export default Meena

// on webpage we cant show an object we can only show elements 
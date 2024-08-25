import React, { useContext } from 'react'
import {globalVar} from './SugarFactory'

const Meena = () => {
    let data= useContext(globalVar);
    console.log(data);
  return (
    <div className='meena'>
      
    </div>
  )
}

export default Meena

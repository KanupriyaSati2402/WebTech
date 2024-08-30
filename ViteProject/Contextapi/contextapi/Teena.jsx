import React, { useContext  } from 'react'
import {globalVals} from './SugarFactory'

const Teena = () => {
   let {sugar3,sugar2} =useContext(globalVals)
  return (
    <div>
      {Object.keys(sugar3).map(()=><div key={i}>{sugar3[ele]}</div>)}
      {/* we want to show values and when we need value a element store then we wrap that variable 
      inside array [] */}
    </div>
  )
}

export default Teena
// in react for iteration we will use map 
// for conditional we will use ternary operator and short circuit 

import React, { useState } from 'react'
import Parent from './Parent'
const Grandparent = () => {
    let [details,setDetails] = useState({
        Empid:123,
        phoneno:72638768,
        name:"kanupriya"
    })
  return (
    <div>
      <Parent da= {{details,setDetails}}/>
    </div>
  )
}

export default Grandparent

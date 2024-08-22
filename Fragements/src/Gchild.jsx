import React from 'react'
import Ggrandchild from './Ggrandchild'

export const Gchild = ({data1:{credentials:{empName,salary},setCredentails,details,setDetails}}) => {
    console.log(salary)
  return (
    <div>
        <Ggrandchild data12={{setCredentails,details,setDetails}}/>
    </div>
  )
}

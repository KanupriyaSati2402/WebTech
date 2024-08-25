import React from 'react'
import { Gchild } from './Gchild'

const Child = ({data:{credentials,setCredentails,details,setDetails}}) => {
    // console.log(props)
    // let {data :{credentials:{empName,Salary},SetCredentials}}=props; // this is how we can use props
    // console.log(Empname); we can destruct in above para()
    // console.log(empName)
    // console.log(salary)
    // console.log(setCredentails)
  return (
    <div>
        <Gchild data1 ={{credentials,setCredentails,details,setDetails} }/>
    </div>
  )
}

export default Child

import React ,{useState}from 'react'

const Life = () => {
    let [life,setLife] = useState("Khtm")
  return (
    <div>
      {life=="Khtm" ? "Keep going" :"Enjoy buddy"}
    </div>
  )
}

export default Life

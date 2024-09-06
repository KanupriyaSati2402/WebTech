import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super()
    this.state={
     count:0
    }
 console.log("Hello");
  }
  render() {
    return (
      <div>
        <button onClick={()=>{count+1}}>Change</button>
      </div>
    )
  }
}


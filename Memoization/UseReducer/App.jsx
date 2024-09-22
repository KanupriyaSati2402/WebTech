import React, { useReducer } from 'react'

const App = () => {

   let reducer=(state, action)=>{
      switch (action.type) {
        case "increment": return {count:state.count+1};
        case "decrement": return {count:state.count-1};
        case "reset": return {count:0}

      }
      
   }
   let reducer1=(state, action)=>{
    switch (action.type) {
      case "increment": return {count:state.count+2};
      case "decrement": return {count:state.count-2};
      case "reset": return {count:0}

    }
    
 }
 let reducer2=(state,action)=>{
  switch (action.type) {
    case "increment": return {count:state.count+3};
    case "decrement": return {count:state.count-3};
    case "reset": return {count:0}

  }
  
}

             let [counter, dispatch]=useReducer(reducer, {count :0})
             let [counter1, dispatch1]=useReducer(reducer1, {count :0})
             let [counter2, dispatch2]=useReducer(reducer2, {count :0})
             
  return (
    <section>
    <div>
      <p>{counter.count}</p>
      <button onClick={()=>{dispatch({ type:"increment"})}}>Increment</button>
      <button onClick={()=>{dispatch({ type:"decrement"})}}>Decrement</button>
      <button onClick={()=>{dispatch({ type:"reset"})}}>Reset</button>
    </div>
    <div>
    <p>{counter1.count}</p>
    <button onClick={()=>{dispatch1({ type:"increment"})}}>Increment</button>
    <button onClick={()=>{dispatch1({ type:"decrement"})}}>Decrement</button>
    <button onClick={()=>{dispatch1({ type:"reset"})}}>Reset</button>
  </div>
  <div>
  <p>{counter2.count}</p>
  <button onClick={()=>{dispatch2({ type:"increment"})}}>Increment</button>
  <button onClick={()=>{dispatch2({ type:"decrement"})}}>Decrement</button>
  <button onClick={()=>{dispatch2({ type:"reset"})}}>Reset</button>
</div>
</section>
  )
}

   
export default App

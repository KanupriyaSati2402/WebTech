import React, {useState} from 'react' // IMPORT THE HOOK THEN ONLY USE 

const FBC =()=>{
    let [count,setCount]=useState(0) // it will accept an state value , (to achieve state in fbc)
    //we have to destruct , thix will return an array that array have two values
    // state name , updator function 
    let handleIncrement =()=>{
        setCount(count+1)
        setCount(count+5)
        setCount(count+10) // every statemnet will work async
        // every statement will get executed at the same time and the values are getting override
    }// the last one will override others 
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            </div>
    )
}
export default FBC;


//-- HERE IN FBC we don't have any in built features state , props so in fbc we use hooks to achieve in built fetires of class 
// -- useState() -- to use state object 
//-- useRef()
//--useEffect()
//--useContext()
//--useReducer()
//--useMemo()
//--useCallback()


//-- hooks are used to achieve inbuilt feature of cbc in fbc 




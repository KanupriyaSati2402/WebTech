import React, { createContext, useState } from 'react'
export let globalVar = createContext(""); // global variable it will have provider  ( global is just a name)
const SugarFactory = ({children}) => {
    let { Provider } = globalVar ; // destructing provider from global varaiable 
    //Provider is inbuilt 
    let [sugar1,setSugar1] = useState(100);
    let [sugar2,setSugar2] = useState(200);
    let [sugar3,setSugar3] = useState({
      username:"prasad",
      salaray:98697,
    });
  return <Provider value={{sugar1,sugar2,sugar3}}>{children}</Provider> //we will use provider as a element inside return 
   // value is in built we have to use it as it is , inside it will pass the value we have to provide
} // after return we have to put under () or in same line 

export default SugarFactory


// last step is to built connection 
// it is used for manage the stated and sharing data but for sharing data we have props also 
// but in props we require parent child relation 
// the process have to be done many times this process is called props drilling 
// to avoid that we have context api 

// how it will work 
// -- we will store the data in one componet and then we will provide 

// step 1- create component (container)
//-- create global variable using createContect 
//-- destruct provider from global varaibale which is already present 
//-- use provider component 
//-- we will connect with our app ( where the prooject start)
//-- and inside them the children (consumers)
//-- we will destruct children inside the parent and that key has to be passed inside provide 
//-- inside Provoder we will use a props for which ever data we need to pass 
//-- inside props if we want to pass multiple elements then pass inside object {}
//-- usecontext will be used inside child that will accept the global variable 
//-- and we will export the global variable 
//-- in consumer we will pass / import 
//-- 
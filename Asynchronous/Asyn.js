/*
Asynchronous 
--when we can execute multiple task at a time 
--can be achieved by using any of these three 
1.Callbacks
 -- SetTimeout() 
 -- will accept a callback function and time interval in millisec
 --use to make js async
 -- SetInterval()
2.Promises
3.Async and await 

*/ 
//when we want to give some delay  (setTimeOu)
//and can be executed only once 
setTimeout(()=>{
// console.log("dora the explorer is")
},5000);
setTimeout(()=>{
   // console.log("Pagal")
},2000);
setTimeout(()=>{
   // console.log("Pagal1")
},3000);
setTimeout(()=>{
  //  console.log("Pagal2")
},8000);
setTimeout(()=>{
   // console.log("Pagal3")
},9000);

// will not go line by line because it is anysn
// if there are synsh executions between the aysn then those all will be executed differently and at first 


//SetInterval 
// will execute the function again and again after the time interval
// we can stop it by clearInterval()
let i= setInterval(() => {
    console.log(i++);
    }, 1000);
    clearInterval(i);
  
    
/*
Promises
-- it is a mechanisms to handle async operation

--pending
--resolve
--reject



*/

let promise =new Promise((resolve,reject)=>{
 
    if(10>30){
        resolve("Promise is resolved")
    }
    else{
        reject("Promise is rejected")
    }
}) // constructor , this promise constructor will accept one callback function 
//and this callback will accpet 2 resolve and reject , the sequence matter (resolve,reject)
//when we are not performing any action inside the promise then the promiseState is pending
//when promise is resolve the data will come under promiseresult 
console.log(promise);

// result will give a object with 3 values 
// --prototype promise
// --promisestate fulfilled 
// --promiseresult " styatment"

//to handle promise we have two methods 

promise.then((data)=>{
    console.log(data) // can be given any name 
})
promise.catch((data1)=>{
    console.log(data1) // can be given any name 
})
// --then() 
//whenever promise is resolved that time we will use then to get the data 
//syntax== promisename.then() 
//-- it will accept and callback function and this callback will accept 1 paramenter (kuch bhi daal skte is a parameter name )
// --catch()
//whenever promise is rejected that time to handle the error will use catch()
//-- same syntax

//if we want to use then and catch together then 
//we can write catch first 
promise.then((data)=>{
console.log(data)
}).catch((data1)=>{
console.log(data1)
})
//-- if promises are giving error then catch finally 
//if we dont have any result for the resolve and result we will use finally
//it is a default acvtion that will be perforned when no result is desrired 


//promise methods
//1.ANY
//2.ALL 
//3.RACE
//4.ALLSETTLED  

//we have to use settimeout and promises for these methods 
//settle means -- resolved or rejected 


//HOW TO FETCH DATA IN JS 
//1.Fetch()
// way to do fetch is 
// by using promises 
// async and await 
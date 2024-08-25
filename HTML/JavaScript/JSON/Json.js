// JSON (Javascript Object Notation)
// in json format key and values both are in double quotes(string format)
// whenever we want to tarnfer the data to backend we convert that code in json bcz backend understand only json
// JSON is lightweight. and it is a format of storing and transporting data, it is used when the data is send from server to webpage
//  (server(accept or tranfer) know only json format)JS doesnt know json so JS convert JS data into json  
// for conversion we have JSON object called javascript object 
// we have two method :-
// 1- stringify() = used to convert JS into JSON
// 2- parse() = used to convert json into JS

let obj1={
    empname:"kanupriya",
    empId: "22",
    salary:"10000",
};
console.log(obj1)
console.log(JSON.stringify(obj1)); // will convert js to json file 
// console.log(JSON.parse(obj1));


// destructing is the method to extract the data from array and object
/*

there are two types of destructing 
1.Array 
let arr= [10,20,30,40,50]
let [a,b,c,d,e]=[...arr]; ... is spread operator 
2.Object 

--to perform this we have 
1.spread operator 
2.rest parameter 

Object destructing 
--
*/
let arr= [10,20,30,40,50]
let [a,b,c,d,e]=[...arr];
console.log(b,d) // array destructing 
//in array we can give random variable names s

//for object we will take the key name for destructing 
let emp={
    empName:"Kanu",
    empId:"22",
    salary:"10000",

}

console.log(emp.empName)

let {empName,salary,mgrNo}={...emp}
console.log(empName)// directly we can pass key name , and the squence can be different , and we can skip the elements also 


//--rest parameters and spread separator 
//-- rest must be last parameter but spread can be used anywhere
//-- rest is used to bind the left over array elements together while spread is used for breaking the elements of the array 
//--used in function defination and spread used when function calling 

//-- array destructing and object destructing difference between
// -- elements can be skipped in object 
//-- sequence is not required in object
//--rest parameter is not used in object destructing 
//-- in array we can assign any variable name while in object we directly passs the key name 

// rest parameter is used to get the remaining elements in the array and object destructing is used to
// get the specific elements from the array and object


//BROWSER STORAGE


//--cache memory -- will be stored by backend
//--session storage -- when we are operating any website and at that time if we want to store any data that will be used inside session 
//--local storage -- permanent storage 

// how to store inside local storage 
//1.getItem
//2.setItem
//3.removeitem
//4.clear

localStorage.setItem("password","1234567890")//to set the data 
console.log(localStorage.getItem("password"))//to get the data
localStorage.removeItem("password")//to remove the data
localStorage.clear()//to clear the data
localStorage.setItem("password","1234567890")
localStorage.setItem("pas","123890")
localStorage.clear()//


//we can use interpolation in it 
let abc ="password"
localStorage.setItem(`${abc}`,"73748sh")//to set the data

//same methods for the session storage 
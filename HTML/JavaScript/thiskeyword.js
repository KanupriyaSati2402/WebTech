/*
This keyword 

--for every function there is a internal class (syngtax is big , complexity) , to make understable we have made functions

-- when we pass this then we can see the class 

function fun(){
this.a=3; // when called will show a class
}
*/

let a= function () {
    console.log(this)
    }
a(); // 
 
function b(){
    console.log(this)
}
b();

let c=function (){
console.log(this)
}
c();

function hoc(d){
    console.log(d);
};
function head(){
    console.log(this);
}
hoc(head); 

//whenever fetching data from backend the data will come as array of object 


let emp1 ={
 name:"sachin",
 age: 25,
 gender:"female"
};
let emp2 ={
    name:"sachin2",
    age: 26,
    gender:"male"
};
let emp3 ={
    name:"sachin3",
    age: 24,
    gender:"female"
};

// we will need to create a function to print the data inside object in minimum lines 

function printdata(a,b){
    console.log(a,b)
    console.log(this.name);
    //console.log(this.name,this.age)
    console.log(this.age);
    console.log(this.gender);
}

//now to each object when they needs to be called we require to bind it with the printing function 



//With this method, we can bind an object to a common function, 
// so that the function gives different results when needed
//To perform binding there are three method
// there are three ways 
// 1. bind
// 2. call
// 3. apply

printdata.call(emp1);
printdata.call(emp2);
printdata.call(emp3);

//if there are parameters then how to pass argument while calling the function 

//call
//will return undefined when printing inside clg
printdata.call(emp1,10,20) // first value is the object , then arguments

//apply 
//will return undefined when printing inside clg
printdata.apply(emp2,[10,20]) // first value is object , then arguements are passed as array 

//bind
//will return a bound function , to invoke the function call it with()
console.log(printdata.bind(emp3)());
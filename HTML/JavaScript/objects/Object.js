/*
object 
--that has existence in the world 
-- objects are mutable 
-- js object is an entity having state and behaviour 
-- object is a collection of properties
-- object is a collection of key value pairs

3 ways to create object 
--object literals 
--object construction (using new keyword)
--object construction function (without keyword)


1.object using object literals 

*/

//CRUD OPERATION

//-- CREATION
let emp = {
  ename: "Kanupriya", // we have to separate each value pair using separator that is ,
  empid: 100,
  salary: 10000,
  designation: "developer",
}; // syntax for object using literals

//READ
console.log(emp.salary); // two ways to access -- 1.accessing using . separator
console.log(emp["designation"]); // 2. using array operator [ ]

//UPDATION

emp.DOB = 2002
emp["mgr"]=345
console.log(emp); // we can add new property to the object
// if we will give value to any property that is present in that object then the value will be override 
// if the property holds an array console.log(emp.salary[index inside it]) 
//if a property holds a function 


//DELETION
delete emp.salary
console.log(emp) // we can delete the property from the object

//2.using object construction with new keyword 

let obj = new Object();
console.log(obj)
obj.name="Kanupriya" // inserting elements inside it 
console.log(obj)

//function is a object for creating another function or object inside it 
function fun(a,b,c,d){
    console.log(a,b,c,d)
}

// in the above function we are not storing anything and only passing the arguements to 
// store anything inside a function we have to use this keyword 
let fun1 = new fun(10,20,30,40) 
// here we have made a clone of object (fun1  so we can insert without the this keyword 

fun1.empid=23;
console.log(fun1) // we can create a object inside a function and we can access it outside
let fun2 = new fun(100,200,300,400) // creating object of function 
console.log(fun2) 

//NOTE 
let abc=30; 
let emp1={
    ename:"Kanupriya",
    empid: 100,
    salary: 10000,
    designation: "developer",
    [abc]:"jadu" // in object if we want to use any variable value as key 
    //we can access by wrapping inside array operator
}
console.log(emp1)

// for login logout mechanisms  (variable as a key)
let abc2= 30>50 ? "login" :"logout";
let emp2={
    ename:"Kanupriya",
    empid: 100,
    salary: 10000,
    designation: "developer",
    [abc2]:"jadu" 
}
console.log(emp2)

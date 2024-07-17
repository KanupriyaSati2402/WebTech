// function
// 1.anonymous
//-- no name given to the function the function is to be called by declaring a variable name and storing the func inside it and then
// calling the function by the variable name.
/*
function(){
let a=20;
}
let b=function()
*/

// 2.Named
//-- name given to the function and the function is called by the name given to it.
/*
function add(a,b){
return a+b;
}
let c=add(10,20);
*/

// 3.Function with expression
//-- function is called by the variable name and the function is declared inside the variable name.(the time they are 
// given in a variable they are called function with expression )
/*
function(){
let a=20;
}
let b=function()
*/

// 4.Immediate invoking function expression
//-- function is called by the variable name and the function is declared inside the variable name and the function.



// 5.Nested function
//-- function that is given under other function
//-- there are two ways to call a nested function
//-- 1. by calling the child function inside parent
//-- 2. function currying

// function parent(){
// let a=10;

// function child(){
// let b =20;
//  }
// child()
// }
// parent() 
// this is 1st way


//JAVASCRIPT ENGINE

//browser (parser , JIT Compiler,Interpreter,Processor) inside browser will give output to console user interface
// the parser  will make the file into chunks and then it will pass it to the js engine for
// execution and then the js engine will execute the file line by line (in small chunks using JIT compiler) 
// converted to byte code and then it will give code to interpreter which will execute code line by line
// then given to processor and then we will get our output


//AST-Abstract structured tree
//-- will create heirachcy of only html elements (tree like structure of the data)
//--each element is known as node

//Inside call stack all executions are done 
// inside heap area all the objects will be stored there.

//when we pass our file to js engine , global execution context is created inside call stack 
//this is two phases are there
//1. declaration phase
//2. execution phase

// initialization will come under execution
// after decalartion phase there will be a memory created inside heap area and its memory address will be passed inside there
// declaration phase , while variable declaration the value will be undefined until the initialzation is done in 
// execution phase

//once the execution of any function gets completed then the execution context will get removed from the call stack
//so the call stack works in LIFO manner

// there is only one global execution context but many execution context 

// because of LEXICAL SCOPE -- accessing the variable from its outer scope , the data will be accessed from the heap area
//closure is also present

//End


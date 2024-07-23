/*
Function currying 
-- return the child function and while calling the parent function use one more () . 
-- there can be more then one nested function 
-- in function currying only one execution context will be there at a time 
-- pointer will come back to gec after complete execution of a function at a time 
function parent(){
let a=10;
RETURN function child(){ // RETURN keyword is to be used in function currying with all the nested function that we are declaraling 

let b=20;
console.log(a,b)
RETURN function gchild(){
let c=30;
console.log(a,b,c)
};
};
}
parent()()();

we don't have lexical scoping
-- we have to use closure to achieve lexical scoping
-- lexical scoping is the ability to access the variables of the outer function from the inner function
there is no parent at the time or child execution 
-- in first method there is lexical scoping , in function currying the parent data will come from closure object 
closure object -- it is object which holds the data which is reqiured to child 
will be created whenever the child function will be accessing parents data , 
doesn't matter the parent are there in context or not 

any data which is not accessed by the child will be stored in closure

QUESTIONS
--Write a js function to find factorial of number using prompt 
--write a js function to check the given number is palindrome or not 
--write a js function to check the given number is armstrong or not
--write a js function to create the fibonnaci series upto 5 numbers
--write a js function to check the given number is prime or not 
*/

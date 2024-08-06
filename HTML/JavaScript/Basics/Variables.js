// In let and var only declaration is possible , initailization can be done in other line 
//reinitialisation is possible
//redeclaration is only possible in VAR
//Var is global (can be accessed any where)

let a;

console.log(a);

var b;  
var b; // redeclaration
console.log(b);

const j=2; 
// only declaration is nor possible ,
// both initailization and declaration in same line (should be in same line) , single declaration is not possible .
// reinitialisation not possible
// const and let are script scope 

//HOISTING - accessing variable before its declaration 

//-- is js's default behaviour of moving all declarations to the top of the current scope .

// console.log(a);
//var a =30; // output -- undefined 

// hoisting is possible with 2 types 
// 1.variable
// 2.function (only in name function , function hoisting is possible)

// in let/const not possible the variable will be taken inside TDZ that is Temporal dead zone which is a phase between 
// declaration and initialisation and it's default value is not given 


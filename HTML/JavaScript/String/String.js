/*
String - bunch of characters or collection of character , either be 1 character or more than 1 all are consider as string
in js 
types to declare 
1. " "
2. ' '
3. ` `

*/

let str = 'Velocitai'
console.log(str);
console.log(typeof str);

let age = prompt("enter your age");
let str1=`The age of the person is ${age}  He is eligible for voting`
console.log(str1);

// if we want to print the value inside the string that we are taking from the user through prompt, 
//1 . by using + 
// let str1="The age of the person is "+ age + " He is eligible for voting"
//2. by using ${ } -- interpolation operator  (with this the string should be written only inside backtick)
//let str1=`The age of the person is ${age}  He is eligible for voting` 
//interpolation -- technique to use variables inside string and interpolation will work only in the string written inside 
// backtick
//when the interoplation in string that time the string is called template string 


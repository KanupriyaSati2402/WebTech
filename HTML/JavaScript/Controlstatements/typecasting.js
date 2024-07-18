// typecasting
// --converting a type of data into another is this 
// two types 
// 1.Implicit- done by the js engine
// 2.Explicit - done by the developers


// + = will convert into String (addition,concatenation)
console.log(10+"10")
// - = integer value only subtraction
// * = integer value 

console.log("10"+ + 10);

// Falsy value
// 0
// null
// undefined
// false
// NaN
// ""

//EXPLICIT TYPECASTING
// we will use constructors
// Number()
// String()
// Boolean() - empty then false , otherwise true
// parseInt() - only the numbers only , remember the % example (the numbers that are before any other things )
// --will only accept integer
// parseFloat() -for float values , same work as parseint


// console.log(Number("10")); // 10

let a=prompt("Enter your graduation percentage")
let b=prompt("Enter your 12th percentage")    
console.log(parseInt(a)+ parseInt(b)); 


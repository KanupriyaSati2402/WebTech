// CONDITIONAL STATEMENT
// if statement
// if else statement -- for single condition
// else if statement -- for multiple condition
// switch statement
// else if ladder statement

let age=15;
let Age =Number(prompt("Enter the original age"))
switch (true) {  // we can't pass condition only expression to be passed 
  case age < 15: // we can pass condition and expression to be passed 
    console.log("go to school");
    break; // mandatory
  case age < 18:
    console.log("go to college");
    break;
  case age > 15:
    console.log("go to job");
    break;

  default:
    break;
}


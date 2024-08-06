/*
modules are used to share the code in multiple files 
*/

export function sum(a,b){ //use export keyword in the file which we want to module , and the file from which we are exporting is a normal js file while the file in which this will be imported will be a module 
    return a+b;
}
console.log(sum(30,40));

export function sub(c,d){
    return c-d;
}
console.log(sub(30,40));

//Each file should have a relationship with each other to be executed 

// there are two types of export statments 

//1. Named Export  -- in named export while exporting any stat we will use only export keyword 
// in named export we have to use { } while importing 
//while importing we should use the same name 
//in one file we can use multiple named export statement can be used // above one is the example of this only 

//2. default Export  -- we have to use export and default keyword after the declaration of the function we need to import 
//we can use only one default export in a file , we cannot use multiple default export statement
// no need of { }
//we can use any name for importing the statement 

export function sub(c,d){
    return c-d;
}
export default sub();

// THE FILES WE ARE NOT USING NEEDS TO BE REMOVED FROM THE FILE 
// We can share anything 

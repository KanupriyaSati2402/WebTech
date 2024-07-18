/*

callback - head 
higher order function -hoc

*/

function hoc(a){
    console.log(a)
}
function head(){
    console.log("Hello")
}

hoc(head) // passing one function to another 
// a function which is accepting another function as a argument is known as higher order function 
// a function which is returning another function is known as higher order function

//a function that is passed inside another function as an argument is called callback (head here)


//99% of times arrow function 


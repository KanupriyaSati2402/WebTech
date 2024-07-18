/*
return statement - to return result of any function 
there are two types 

1.implicit -- without using return keyword 
there are some rules for implicit return type 
1.we should not use function body{}
2.no need to use return keyword
3.we should have only 1 statement inside body

for eg 
let fun=(a,b)=>a+b;
console.log(fun(2,3)); //5

how to use multiple statements inside implicit 
type 

by using paranthessis 
let fun=(a,b)=>(a+b , a-b ) // done in real time projects
console.log(fun(2,3));

only posiible with arrow function 

2.explicit 

*/
let emp1 = {
  name: "sachin",
  age: 25,
  gender: "female",
};
let emp2 = {
  name: "sachin2",
  age: 26,
  gender: "male",
};
let emp3 = {
  name: "sachin3",
  age: 24,
  gender: "female",
};

let fun = (a, b) => (
  console.log(a, b),
  console.log(this.name),
  console.log(this.age),
  console.log(this.gender)
);

fun.call(emp2, 10, 20);
fun.apply(emp2,[10,30]);

/*
Generator Function 
--it is a normal function , but whenever it needs to generate a value,it does so
 with the yield keyword rather than return 



-- used to generate different generator object every time it is called.
-- Generator function is a function that returns a generator object.
-- Generator function is declared using the function* syntax.
-- Generator function is called using the yield keyword.
-- Generator function can be called multiple times.


yield is creating that object that we are getting 


-- in generator function there is no return keyword 
will give different results with different execution of a single function 




*/
function* fun(a){
  yield a+10; // keyword in geneartor function
  yield a+20;
  yield a+30;
  yield a+40;
}

let ab= fun(10);
console.log(ab.next().value); // next ands value a
console.log(ab.next().value);
console.log(ab.next().value);
console.log(ab.next().value);


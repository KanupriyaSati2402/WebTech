//ADVANCE ARRAY METHODS

//ForEach() -- higher order function , which will accept a callback (arrow function because shorthand syntax)
//-- and this callback function will take [array elemenst,index,complete array]
const arr13 = [2, 5, 6, 93, 2, 1, 44, 77];
arr13.forEach((ele, i, arr) => 
    {console.log(ele)

    });
// will not return any value
//arr13.forEach((element, index, array) => console.log(element, index, array));
// will print all the elements of array
// will not affect the original array
// we can use this forEach() method to print all the elements of array
//-- For iterate the array we have 


//Map()
const arr14 = [2, 5, 6, 93, 2, 1, 44, 77];
let a= arr14.map((ele, i, arr) => 
    {
return ele+5; // only expression
    });
    console.log(a);
//-- when we want to update values in the array then we will use map 
//-- it will return value
//-- when we will filter in this will only through the boolean values 

//Filter()
const arr15 = [2, 5, 6, 93, 2, 1, 44, 77];
    let b= arr15.filter((ele, i, arr) =>
        {
            return ele>5; // only condition
            });
            console.log(b);
            //-- when we want to filter the array based on some condition and will return new filtered array
            //-- it will return value
            //-- it will not affect the original array
            //-- it will return a new array
            //-- it will return the array which is greater than 5

//find()
const arr16 = [2, 5, 6, 93, 2, 1, 44, 77];
    let c= arr16.find((ele, i, arr) =>
        {
            return ele>80; // only condition
            });
            console.log(c);
            //-- when we want to find the first element which is greater than 5
            //-- it will return value
            //-- it will not affect the original array

//Reduce()


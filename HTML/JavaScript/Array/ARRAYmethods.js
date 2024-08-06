/*
Array Methods 

--to add any elements inside a Array 
let a=[10,20,30,40,50]
a.push(60) // PUSH METHOD  -- will add the element at the last only 
console.log(a)

arr.length for length of the array
always use const variable  ( rare case we use let and avoid var)
*/

const arr = [20, 30, 40, 50];
arr.unshift(10); //-- UNSHIFT -- will add/insert value inside the array but in first position
console.log(arr);

const arr1 = [10, 20, 30, 40, 100];
arr1.pop(); //--POP-- will delete last value from array
console.log(arr1);

const arr2 = [100, 200, 300, 400, 500];
arr2.shift(); //--shift-- will remove first value from array
console.log(arr2);

const arr3 = [100, 200, 300, 400, 500, 400];
//--indexOf-- will accept an array elements and return its index value of the first occurrence
console.log(arr3.indexOf(300));
//for getting last occurrence index we will use
console.log(arr3.lastIndexOf(400));

const arr4 = [1, 24, 5, 6, 3, 3, 2];
//--INCLUDES -- to find if certain value is present or not in that array ( return type is boolean )
console.log(arr4.includes(8));

const arr5 = [[2, 233, 3, 4, 2, 2, 24, 4, 5, 5, 567, 7]];
//-- AT-- to get the value at some particular index
console.log(arr5.at(6));

const arr6 = [2, 5, 6, 93, 2, 1, 44, 77];
//--SLICE -- it will give slice of an array and it will not affect the original array
console.log(arr6.slice(2, 5)); // first index will be the 1 argument
// last index will be the 2 argument and will exclude the last index value

const arr7 = [2, 5, 6, 93, 2, 1, 44, 77];
//--SPLICE -- it will give slice of an array and it will replace them from some particular item and will affect the
// original aaray
console.log(arr7.splice(2, 5, 7, 7, 7, 7, 7)); // first index will be the 1 argument
console.log(arr7); // 2 argument is length
// then replacable elemsnts

const arr8 = [2, 5, 6, 93, 2, 1, 44, 77];
console.log(arr8.join());
console.log(typeof arr8.join());
console.log(arr8.join(" ")); // anything written under these double qoutes will be printing in between 2 elements of array
// commas will be removed when we give empty string

const arr9 = [2, 5, 6, 93, 2, 1, 44, 77];
const arr10 = [2, 233, 3, 4, 2, 2, 24, 4, 5, 5, 567, 7];
console.log(arr9.concat(arr10)); // --CONCAT-- concat will join two arrays
//-- will not affect the original array

const arr11 = [2, 5, 6, 93, 2, 1, 44, 77];
console.log(arr11.reverse()); // --REVERSE-- will reverse the array
console.log(arr11);
// will affect the original array

const arr12 = [2, 5, 6, 93, 2, 1, 44, 77];
console.log(arr12.sort()); // --SORT-- will sort the array with first num only
console.log(arr12);
console.log(arr12.sort((a, b) => b - a)); // for aesc (a-b) for desc (b-a)
// In this we have to pass comparatable function (callback)
//inside this to sort the array  , we can pass any function inside it
// will affect the original array





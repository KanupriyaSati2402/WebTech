/*
Advanced For Loops 
1.For in 
2.For of
*/
let arr=[10,20,30,40,50]
for(const i in arr){
    console.log(i)
}
// in will return index  
// will work on array 
// will work on object
// will work on string

let arr1=[10,20,30,40,50]
for(const i of arr){
    console.log(i)
}
// of will return element
// will work on array 
// will not work on object
// will work on string

// let str="kanupriya"
// for(const i in str){
//     console.log(i)
// }
// in will return index
// will work on string

// let str1="kanupriya"
// for(const i of str){
//     console.log(i)
// }
// of will return element
// will work on string


let obj= {
    name:"kanupriya",
    age:22,
    city:"delhi"
}
for(const i in obj){
    console.log(i)
    }
    //will return the keyname 
    //will work on object
    //will not work on array



let str5='ABA'
let str6 = str5.reverse();
console.log(str6==str5);
       
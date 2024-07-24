// Homework
/*
let a = parseInt(prompt('Enter 1st number for Sum'))
let b = parseInt(prompt('Enter 2st number for Sum'))
function sum(a,b){
   console.log(a+b)
}
sum(a,b)
*/

/*
Prime Number function 

let num =prompt("Enter the Number")
function prime(num){
    let count=0;
    for(let a=2;a<num;a++){
        if(num%a==0){
            count++;
        }
    }
    if(count==0){
        console.log("Prime Number")
    }
    else console.log("Non Prime Number")
}
prime(num);
*/

let str = "Kanupriya";
function reverse(str) {
  let h = str.split("");
  let r = h.reverse();
  console.log(r.join(""));
}
reverse(str);
// let arr=[12,24,36,48]
// let arr1 = [10,20,30,40,50]
// console.log(arr.concat(arr1))

/*
let num=prompt("Enter the Number")
function fact(num){
    if(num==1 || num==0 ){
        return 1
    }
        return num*fact(num-1)
    
}
console.log(fact(num))
*/

/*
let str1 = "This is a message for kanupriya ";
function max(str1) {
  let arr = str1.split(" ");
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  console.log(max);
}
max(str1)
*/


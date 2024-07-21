// to find a factorial 
/*
let a =parseInt(prompt("Enter the number"))
function factorial(a){
    if(a<0){
        return "Number should be positive "
    }
    else if(a==0){
        return 1;
    }
    else {
        return a*factorial(a-1);
    }
}
console.log(factorial(a))

//palindrome or not 
let b=parseInt(prompt("Enter a number"))
function palindrome(b){
    let temp=0;
    let rev=0;
    while(b>9){
        temp=b%10;
        rev=rev*10+temp;
    }
    if(b==rev){
        return "It is a palindrome number"
    }
    else {
        return "It is not a palindrome number"
    }
}

//array average 
let arr=[3,5,2,5,7,9,10]
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(average(arr));

//maximum number 
let arr1=[3,5,2,5,7,9,10]
function max(arr1){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(max(arr1));

//sum of array
let arr2=[3,5,2,1,6,10,38]
function sum(arr2){
    let sum=0;
    for(let i=0;i<arr2.length;i++){
        sum=sum+arr[i];
    }
    return sum
}
console.log(sum(arr2))

//indexof elements

let arr3=[3,5,2,1,6,10,38]
console.log(arr3.indexOf(2));

*/
//element more than the avg of array 
let arr4=[3,5,2,1,6,10,38]
function morethanavg(arr4){
    let sum=0;
    for(let i=0;i<arr4.length;i++){
        sum=sum+arr4[i];
    }
    let avg=sum/arr4.length;
    let res=[];
    for(let j=0;j<arr4.length;j++){
        if(arr4[j]>avg){
            res.push(arr4[j])
        }
    }
return res
}
console.log(morethanavg(arr4));

//flattern return 
let n = [[[[[[[[[[10]]]]]]]]]]
console.log()


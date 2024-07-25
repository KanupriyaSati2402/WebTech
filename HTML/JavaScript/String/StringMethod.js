/*
string.length--property 
--will give the length of the string 

Methods 
string.charAt(index)
string.concat(string2)
string.trim()
string.trimStart()
string.trimEnd()
string.slice(start, end)-- will give part of the string
string.substring(start, end)
string.substr(start, length)
string.toUpperCase()
string.toLowerCase()
string.replace()
string.replaceAll()
string.charCodeAt()
string.split(separator, limit)
string.padStart()
string.padEnd()
string.FromCharCodeAt()


*/
let str="Kanupriya"
let str1="velocitai"
console.log(str1.length);

let str2 = "      java and javascript both are Diff "
console.log(str2.slice(0,4));
console.log(str2.substring(-5,-1)); 
// we cannot pass negative index 

console.log(str2.substr(0,5)); 
// no one is using it , removed (will take 2 arguments , 1-start index , 2-length)

console.log(str2.split("")); 
// split the string into array of characters 

console.log(str2.split(" ",2)); 
// split the string into array of characters and limit the number of elements in the array

console.log(str2.replace('javascript','java script')) 
// we take 2 parameters , 1-the string to be replaced , 2- with what TO REPLACE 
// it will replace the first occurence of the string to be replaced

console.log(str2.replaceAll('java','python'))
// if we want to replace all the occurences , we use replaceAll() method

console.log(str2.toUpperCase())
// will take all the characters inside string to upper 

console.log(str2.toLowerCase())
// will change all characters inside a string to lower 

console.log(str2.concat(" ",str1," ",str))
// will join two or more string 

console.log(str2.trimStart()) // removes the white space from the starting of the string
console.log(str2.trimEnd()) // removes the white space from the ending of the string
console.log(str2.trim())// is a shorthand 


let str3="7895872411"
let nos=str3.slice(0,4)
// console.log(nos.padStart(10,'*'))
// will add * to the left side of the string
console.log(nos.padEnd(10,'*'))
// will add * to the right side of the string
// is used to add symbol to the string 


console.log(str3.charAt(4))
//will return the char at that index and will not accept - value
console.log(str3.charCodeAt(4))
//will return the ascii value of that particular char at that particular index 

console.log(String.fromCharCode(97))
//will return ascii value into character , and it is a string constructor method 


let a="5266262782782";
let bar=a.slice(0,4)
console.log(bar.padStart(13,'*'))


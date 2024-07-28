/*
DOM Traversing - we perform crud operations on html elements with this 
DOM Manipulation - we can create, remove, modify html elements with this

FOR CREATION --
1.createElement() 
-- to create html element inside the document using js 
2.append() 
-- to add/insert the created element to the document or any other element 
3.appendChild()
-- to add/insert the created element to the document or any other element
4.remove()
-- to remove the element from the document
5. SetAttribute() 
-- we can set any attribute () , we pass two values inside it (atrribute name , value) 
(attribute can be anything which we want to declare )
6.innerhtml
--we can access the inner html element inside any element , by tagging that element and than using innerhtml
-- will select all the elements inside that particular element
7.innertext 
--if we want to pass or modify any data inside the element we have made this property is used and we can retrive the 
text also by using this 


let body = document.querySelector("body")
write this at the starting only 

*/

// let a=document.createElement("section")
// console.log(a)
// a.setAttribute("class","container") // we can pass multiple attributes which are required by us for styling 
// if we want to pass/give multiple class name to a single elements we will pass like 
//  a.setAttribute("class","container container-fluid")
// a.innerText=("Hello Section")

// let body = document.querySelector("body")
// body.appendChild(a)

let a=document.createElement('h1')
a.setAttribute=("class","head1")
a.innerText=("This is heading one")
let b = document.createElement("h1")
b.setAttribute=("class","head2")
b.innerText=("This is heading two")
let c = document.createElement("h1")
c.setAttribute=("class","head2")
c.innerText=("This is heading three")
console.log(c)
console.log(a)
console.log(b)

let body = document.querySelector("body")
//body.appendChild()  will show only 1st one 
body.append(a,b,c)
// body.append(b)
// we are writing the appendChild statement twice for two elements for minimizing the lines for appening it we can use append
//with append we can insert multuple

c.remove()

let sec=document.querySelector("section")
// console.log(sec.innerHTML)
// sec.innerHtml="<h1>Hy There</h1>"
sec.innerHTML += "<h1>Hy There</h1>";
console.log(sec)
console.log(sec.innerHTML)

//if we want to look to all the children inside a element we can use children keyword like 
console.log(sec.children)
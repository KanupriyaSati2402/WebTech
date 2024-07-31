/*

Event propagation refers to the way events travel through the DOM tree. 
When an event occurs on an element, it can trigger event handlers not only on that element but also on its parent elements, 
all the way up to the root of the document. 

There are two phases of event propagation:

1. Capturing Phase: The event travels from the root of the DOM tree down to the target element. (outer most to inner most)

2. Bubbling Phase: The event then bubbles up from the target element back to the root. (inner to outer)
--default phase

event.stopPropagation(): 
This method prevents further propagation of the current event. 
It stops the event from bubbling up the DOM tree or from capturing down the tree


preventDefault -- to stop the default behaviour 


*/
let a = document.querySelector("section")
a.style.border="1px solid black"
a.style.height="400px"
a.style.width="400px"
a.style.display="flex";
a.style.justifyContent="center";
a.style.alignItems="center"

let b = document.querySelector(".section1")
b.style.border="1px solid black"
b.style.height="200px"
b.style.width="200px"
b.style.display="flex"
b.style.justifyContent="center"
b.style.alignItems="center"


let c = document.querySelector(".section2")
c.style.border="1px solid black"
c.style.height="100px"
c.style.width="100px"
c.style.display="flex"
c.style.justifyContent="center"
c.style.alignItems="center"


a.addEventListener("click",(e)=>{
     a.style.backgroundColor="red"
     e.stopPropagation()
})

b.addEventListener("click",(e)=>{
    b.style.backgroundColor="blue"
    e.stopPropagation()
})

c.addEventListener("click",(e)=>{
    c.style.backgroundColor="green"
    e.stopPropagation()
})

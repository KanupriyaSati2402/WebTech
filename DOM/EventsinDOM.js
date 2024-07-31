/*
--Events in dom 
-- event-- an action performed by the user on the webpage is know as an event 
-- a js can be executed when an event occurs like when user clicks on the html element


there are two ways to use Dom events
1.by using html attributes 
2.by using addEventListener (It is a method ) will take 2 arguments , 1st -- event type (without on ) and 2 is callback function 

THIS IS THE FIRST WAY
-- prefix everything with on
click  -- on clicking 
Mouseover
Mouseout
Mousedown
Mouseup
Contaxmenu -- for right click
Doubleclick -- for double click 
Keypress -- key pressed then (click karke chodne m)
Keyup -- chod diye tab 
Keydown -- dabaye rhe tab 
submit --on submit
*/

let a= document.querySelector("section")
a.style.width="200px"
a.style.height="200px"
a.style.border="1px solid black"
let c=a.innerText
function Mouse(){
    let b= a.style.borderRadius="50%"
     a.innertext = b;
}
function Mouse1(){
     let D= a.style.borderRadius=""
    a.innerText= D;
}
function changeColor(){
    a.style.backgroundColor="red"
}

let b =document.querySelector(".counter")
let count = parseInt(b.innerText)

function increase(){
  count+=1;
  b.innerText=count;
}

function decrease(){
  count -= 1;
  b.innerText = count;
}

function reset(){
   count =0;
   b.innerText = count;

}

// add event listener 
button.addEventListener("mouseover",()=>{
    a.style.borderRadius="50%"
})

let a = document.querySelector("input");
let b = document.querySelector("button");
let c = document.querySelector("div");

b.addEventListener("click",()=>{
    if(a.value == " "){
        c.style.display="none";
    }
})

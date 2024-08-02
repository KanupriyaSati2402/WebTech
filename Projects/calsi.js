let a=document.querySelector("section")
// a.innerHTML="" // we cannot pass double qoutes inside double qoutes 
a.innerHTML+=`<div class='display'>0</div>
<button class="but but1">1</button>
    <button class="but but2">2</button>
    <button class="but but3">3</button>
    <button class="but but4">/</button>
    <button class="but but5">4</button>
    <button class="but but6">5</button>
    <button class="but but7">6</button>
    <button class="but but8">*</button>
    <button class="but but9">7</button>
    <button class="but but10">8</button>
    <button class="but but11">9</button>
    <button class="but but12">-</button>
    <button class="but but13">Cls</button>
    <button class="but but14">0</button>
    <button class="but but15">=</button>
    <button class="but but16">+</button>`

/*one more method to do this is 
let buttons=[1,2,3,"/",4,5,6,"*",7,8,9,"-","Cls",0,"+"]

buttons.forEach((ele)=>{
    section.innerHTML+=`<button>${ele}</button>`
    })

*/
let display=document.querySelector(".display");
let buttons=document.getElementsByTagName("button");

let finalval=Number(display.innerText) // converted the string into number as we have passed it 
let inputVal=0;
Array.from(buttons).forEach((element)=>{ // array from any element into array 
    element.addEventListener("click",(e)=>{
        let val=e.target.innerText; //use switch to make it more efficient 
    
        if(
            val !="+" &&
            val !="-" &&
            val !="*" &&
            val !="/" &&
            val !="Cls" &&
            val !="="
        )
        {
            inputVal=val;
            display.innerText=val;
        }
        if(e.target.innerText =="+"){
            // console.log(inputVal);
            // finalval += Number(val);
            display.innerText=finalval;
            add(inputVal)
        }
    });
});

let add=(val)=>{
    console.log(val);
   finalval+=Number(val)
   display.innerText=finalval;
}


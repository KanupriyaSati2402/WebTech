let niddle1=document.querySelector(".niddle1");
let niddle2=document.querySelector(".niddle2");
let niddle3=document.querySelector(".niddle3");

setInterval (()=>{
    let date=new Date();
    let second= date.getSeconds();
    let min=date.getMinutes();
    let hour=date.getHours();

    niddle1.style.transform =`rotate(${second*6}deg)`;
    niddle2.style.transform =`rotate(${min*6}deg)`;
    niddle3.style.transform =`rotate(${hour*30}deg)`;
    },1000);

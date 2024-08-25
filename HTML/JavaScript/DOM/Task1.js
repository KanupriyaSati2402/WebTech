//list 

// let cities = ['delhi','haldwani','gurugram','pune','Haridwar','noida','dehu','Rudrapur']
// let ol=document.querySelector("ol")
// cities.forEach((ele,i,arr)=>{
// ol.innerHTML += `<li>${ele}</li>`
// })

//dropdown 
let cities2 = ['delhi','haldwani','gurugram','pune','Haridwar','noida','dehu','Rudrapur']
let select=document.querySelector("select")
cities2.forEach((ele,i,arr)=>{
select.innerHTML += `<option>${ele}</option>`
})
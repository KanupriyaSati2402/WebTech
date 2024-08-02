// let fetchData = fetch("https://api.github.com/users")
// .then((res)=>{
// return res.json();
// })
// .then((data)=>{
//     console.log(data)
// });
// the number of promises the number of then will be used for resolving it 
// json is used convert into js we can only use json() to convert 
// here fetch will give one promise then will be used to resolve it and then we get json output 
// then that json() will also return a promise then we will resolve it again by using  using then 

//async await 
// it might take some time to fetch data for that not to affect the execution of the other fuinction we will make async
// let fetchdata= async ()=>{ // this async keyword is used to make any statment asynchronous 
//     let response =await fetch("https://api.github.com/users") // this fetch will reture a promise , and till the data is fetched 
//     we will wait so we will use await , and after using await the fetch will not return any promise 
//     let data= await response.json()
//     console.log(data);
//     data.forEach((ele,i,arr)=>{
// console.log(ele)
// displayUser(ele)
//     })
// }
// fetchdata();
// let section = document.querySelector("section")

// let displayUser =(user) =>{
//     let card=document.createElement("div")
//     card.className="card"
//     card.innerHTML=`<img src="${user.avatar_url}" alt="${user.login}" class="userImage">
//                     <h1>${user.login}</h1>
//                     <p>${user.id}</p>`
//     document.section.append(card)
// }

let section = document.querySelector("section")

let fetchData = async () =>{
    let response = await fetch("https://api.github.com/users")  
    let data = await response.json() 
    data.forEach((ele , index , arr) => {
        console.log(ele);
        displayUser(ele);
    });
};
fetchData();

let displayUser = (data) => {
    let card = document.createElement("div")
    card.setAttribute("class" , "cards")
    card.innerHTML = `<img src="${data.avatar_url}" alt="" class = "userImage">
                      <h1>${data.login}</h1>
                    <p>${data.id}</p>` ;
                    
    section.append(card);
};
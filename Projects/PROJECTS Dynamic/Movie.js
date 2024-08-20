// let a = document.querySelector(".cards");
let input = document.querySelector("input")
let datalist=document.querySelector("datalist")
let cross=document.querySelector(".cross")
let popup=document.querySelector(".popup")
let g=document.querySelector(".goggle")
let b=document.querySelector(".Bussiness")
let ent=document.querySelector(".Enter")
let s=document.querySelector(".Science")
let fetchNews= async(url,container)=>{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    data.articles.filter((e)=>e.urlToImage !=null).forEach((e)=>{
        displaynews(e,container)

        })
}
// fetchNews("https://newsapi.org/v2/everything?q=google&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",g);
// fetchNews("https://newsapi.org/v2/everything?q=entertainment&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",b)
// fetchNews("https://newsapi.org/v2/everything?q=entertainment&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",ent)
// fetchNews("https://newsapi.org/v2/everything?q=science&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",s)


let displaynews= (data,container)=>{ // which data in which container 
  let cards=document.createElement("div");
  cards.setAttribute("class","cardContainer");
  cards.innerHTML=`<img src="${data.urlToImage}" class="cardImg">
                   <p>${data.title}</p>
                   <p>Author:${data.author}</p>
                   <p>Published At: <br>${data.publishedAt}</p>`

                   cards.addEventListener("click", (e)=>{
                    popup.style.visibility="visible";
                   })
                   container.append(cards);
}
cross.addEventListener("click",()=>{
  popup.style.visibility="hidden";
})

datalist.addEventListener("click",()=>{
  let value = input.value;
  if(value=="Bussiness"){
     // fetchNews("https://newsapi.org/v2/everything?q=entertainment&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",b)
  }
  else if(value=="Goggle"){
 //   fetchNews("https://newsapi.org/v2/everything?q=google&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",g);
  }
  else if (value=="Entertainment"){
// fetchNews("https://newsapi.org/v2/everything?q=entertainment&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",ent)
  }
  else if(value=="Science"){
// fetchNews("https://newsapi.org/v2/everything?q=science&from=2024-08-07&to=2024-08-09&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",s)
  }

})


// let displayBuss=(data,container)=>{
//     let cards=document.createElement("div");
//     cards.setAttribute("class","cardConatiner")
//     cards.innerHTML=`<img src="${data.urlToImage}" class="cardImg">
//                    <p>${data.title}</p>
//                    <p>${data.author}</p>
//                    <p>${data.publishedAt}</p>`
//                    container.append(cards)

// }


// let displayCards=(e)=>{
//  let card=document.createElement("div");
//  card.setAttribute("class","card")
//  card.innerHTML = `<h2>${e.author}</h2>
//                    <p>${e.description}</p>
//                    <p>Published At: ${e.publishedAt}</p>
//                    <p>Source: ${e.source.name}</p>`

                  
//                    a.append(card);
//     }

  




// let a = document.querySelector(".cards");
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
fetchNews("https://newsapi.org/v2/everything?q=tesla&from=2024-07-08&sortBy=publishedAt&apiKey=aec1cb22b3c44d0a817601265c01e4f2",g);
fetchNews("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aec1cb22b3c44d0a817601265c01e4f2",b)
fetchNews("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=aec1cb22b3c44d0a817601265c01e4f2",ent)
fetchNews("https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-07&sortBy=popularity&apiKey=aec1cb22b3c44d0a817601265c01e4f2",s)


let displaynews= (data,container)=>{ // which data in which container 
  let cards=document.createElement("div");
  cards.setAttribute("class","cardContainer");
  cards.innerHTML=`<img src="${data.urlToImage}" class="cardImg">
                   <p>${data.title}</p>
                   <p>Author:${data.author}</p>
                   <p>Published At: <br>${data.publishedAt}</p>`
                   container.append(cards);
}

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

  




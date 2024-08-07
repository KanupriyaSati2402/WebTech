let a = document.querySelector(".cards");
let fetchMovie = async()=>{
    let res = await fetch("https://freetestapi.com/api/v1/movies");
    let data = await res.json();
    console.log(data);
    data.forEach((e)=>{
        displayCards(e)
        })
}
fetchMovie();


let displayCards=(e)=>{
 let card=document.createElement("div");
 card.setAttribute("class","card")
 card.innerHTML = `<h2>${e.title}</h2>
                   <p>${e.actors}</p>
                   <p>Rating : ${e.rating}</p>`
                  
                   a.append(card);
    }
  




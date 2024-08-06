let fetchMovie = async()=>{
    let res = await fetch("https://freetestapi.com/api/v1/movies");
    let data = await res.json();
    console.log(data);
  
}
fetchMovie();

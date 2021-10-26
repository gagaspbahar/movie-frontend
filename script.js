function getData(){
    return fetch("./movies.json")
        .then(res=>res.json())
        .then(function(data){
            var movieData = data
            return movieData
        })
}

function renderMovieList(json){
    json.forEach(mov =>{
        document.getElementById("movieRating").innerHTML = mov.rating
        document.getElementById("movieThumbnail").src = mov.img
        document.getElementById("movieTitle").innerHTML = mov.title + " (" + mov.release + ")"
        document.getElementById("movieTitle").href = mov.link
        document.getElementById("movieGenre").innerHTML = mov.genre
        document.getElementById("movieDesc").innerHTML = mov.synopsis
    })
}


var movieData;
getData().then(val =>{
    movieData = val
    renderMovieList(movieData);
});

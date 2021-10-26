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
        var list = document.getElementById("movie");
        var listClone = list.cloneNode(true);
        listClone.getElementsByClassName("movieRating")[0].innerHTML = mov.rating
        listClone.getElementsByClassName("movieThumbnail")[0].src = mov.img
        listClone.getElementsByClassName("movieTitle")[0].innerHTML = mov.title + " (" + mov.release + ")"
        listClone.getElementsByClassName("movieTitle")[0].href = mov.link
        listClone.getElementsByClassName("movieGenre")[0].innerHTML = mov.genre
        listClone.getElementsByClassName("movieDesc")[0].innerHTML = mov.synopsis
        document.body.appendChild(listClone)
    })

}


var movieData;
getData().then(val =>{
    movieData = val
    renderMovieList(movieData);
});

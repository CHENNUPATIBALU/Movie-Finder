function find_movie(){
    var movie_name = document.getElementById("movie_name").value;
    if(movie_name==""){
        alert("Please Enter the Movie Name");
        toggleTable(false);
    }
    else{
    httpRequest = new XMLHttpRequest();
    url = "https://www.omdbapi.com/?t="+movie_name+"&apikey=333e06b5";
    httpRequest.open("GET",url);
    httpRequest.send();

    httpRequest.onreadystatechange = 
        function(){
            if(this.readyState == 4 && this.status == 200){
                movie_data = JSON.parse(this.responseText);
                movie_poster = movie_data.Poster;
                response = movie_data.Response;
                if(response=="True"){
                    toggleTable(true);
                    show_image(movie_poster,400,400,"movie poster");
                    document.getElementById("movie-title").innerHTML = "<b>Movie Title: </b>"+movie_data.Title;
                    document.getElementById("title").innerHTML = movie_data.Title;
                    document.getElementById("year").innerHTML = movie_data.Year;
                    document.getElementById("release-date").innerHTML = movie_data.Released;
                    document.getElementById("genre").innerHTML = movie_data.Genre;
                    document.getElementById("productions").innerHTML = movie_data.Production;
                    document.getElementById("director").innerHTML = movie_data.Director;
                    document.getElementById("writer").innerHTML = movie_data.Writer;
                    document.getElementById("cast").innerHTML = movie_data.Actors;
                    document.getElementById("story").innerHTML = movie_data.Plot;
                    document.getElementById("language").innerHTML = movie_data.Language;
                    document.getElementById("country").innerHTML = movie_data.Country;
                    document.getElementById("awards").innerHTML = movie_data.Awards;
                    document.getElementById("rating").innerHTML = movie_data.imdbRating;
                    document.getElementById("box-office").innerHTML = movie_data.BoxOffice;
                }
                else{
                    alert("Movie not found");
                }
            }
        }
    }
}
function show_image(src, width, height, alt) {
    var img = new Image();
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    document.getElementById("poster").src = img.src;
}
function toggleTable(hide)
{
    if (hide) {
       document.getElementById("movie-table").style.display="table";

    } else {
       document.getElementById("movie-table").style.display="none";
    }
}

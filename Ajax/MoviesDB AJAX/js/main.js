let myHttp = new XMLHttpRequest()

myHttp.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");
myHttp.send();
let moviesList;
let posts = document.getElementById('posts');


myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
        moviesList = JSON.parse(myHttp.response).results;

        displayPosts();
    }
})


function displayPosts() {
    let cartoona = ``;

    for (let i = 0; i < moviesList.length; i++) {
        cartoona += ` 
                    <div class="col-md-3 py-3 position-relative bg-bg-success">
                        <div class="position-relative overflow-hidden">
                            <img src="https://image.tmdb.org/t/p/w500${moviesList[i].poster_path}" class="w-100">
                            <h3>${moviesList[i].title}</h3>
                            <p>${moviesList[i].overview.split(" ").slice(0, 10).join(" ")}</p>
                            <span class="position-absolute p-3 bg-info font-weight-bold">${moviesList[i].vote_average} </span>
                        </div>
                    </div>
                `
    }

    posts.innerHTML = cartoona;
}
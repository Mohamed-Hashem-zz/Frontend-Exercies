let username = document.querySelector('input');
let searchBtn = document.querySelector('button');
let showData = document.querySelector('.repoShowData')

let repos;

searchBtn.addEventListener('click', function () {
    showData.innerHTML = '';
    getRepo();
})


function getRepo() {
    if (username.value == '')
        showData.innerHTML = "<h3>The Field is Empty , Please Write Github Username ....  </h3>"
    else {

        let xtr = new XMLHttpRequest();

        xtr.open('GET', `https://api.github.com/users/${username.value}/repos`)
        xtr.send();
        xtr.addEventListener('readystatechange', function () {

            if (xtr.status == 200 && xtr.readyState == 4) {

                repos = JSON.parse(xtr.response);

                let cartoona = ``;

                for (let i = 0; i < repos.length; i++) {
                    cartoona += `   <div class="repos">
                                        <p>${repos[i].name}</p>
                                        <div class="btns">
                                            <span class="stars">Stars <span class="star">${repos[i].stargazers_count} </span></span>
                                            <a class="visit" target="_blank" href="${repos[i].html_url}">visit</a>
                                        </div>
                                    </div>
                             `
                }
                showData.innerHTML = cartoona;

            }
        })
    }
}
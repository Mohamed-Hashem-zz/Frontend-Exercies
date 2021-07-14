/*
    Revision

=====3 parts=============
-Part1
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelectorAll('.demo .test h1')//10h1
document.querySelector('.demo .test h1')//h1
-Part2
elm,event,action
i====click==
elm.style.property
elm.style.cssText
elm.classList.add('test'),remove,replace
-part3
addEventListener

*/

let layerContainer = document.getElementById('LayerContainer');
let imgs = Array.from(document.querySelectorAll('.card img'));
let boxItem = document.getElementById('boxItem');

let exit = document.getElementById('exit')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let indexOfCurrentImg = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        layerContainer.style.display = "flex";
        boxItem.style.backgroundImage = `url('${e.target.src}')`;
        indexOfCurrentImg = imgs.indexOf(e.target);  // to catch the index of Imgs to use it in Next and Prev btn
    })
}


// for (const img of imgs) {
//     img.addEventListener('click', function (e) {
//         layerContainer.style.display = "flex";
//         boxItem.style.backgroundImage = `url('${e.target.src}')`;
//         indexOfCurrentImg = imgs.indexOf(e.target); // to catch the index of Imgs to use it in Next and Prev btn
//     })
// }

exit.addEventListener('click', exitFunction);

next.addEventListener('click', nextFunction);

prev.addEventListener('click', prevFunction);

function exitFunction() {
    layerContainer.style.display = "none";
}

function prevFunction() {
    indexOfCurrentImg--;

    if (indexOfCurrentImg < 0)
        indexOfCurrentImg = imgs.length - 1;

    boxItem.style.backgroundImage = `url('${imgs[indexOfCurrentImg].src}')`;
}

function nextFunction() {
    indexOfCurrentImg++;

    if (indexOfCurrentImg == imgs.length)
        indexOfCurrentImg = 0;

    boxItem.style.backgroundImage = `url('${imgs[indexOfCurrentImg].src}')`;
}

document.addEventListener('keyup', function (e) {

    if (e.key == 'ArrowRight' || e.key == 'ArrowUp') {
        nextFunction();
    }
    else if (e.key == 'ArrowLeft' || e.key == 'ArrowDown')
        prevFunction();
    else
        exitFunction();
})

layerContainer.addEventListener('click', function () {
    layerContainer.style.display = "none";
})

boxItem.addEventListener('click', function (e) {
    e.stopPropagation();
})
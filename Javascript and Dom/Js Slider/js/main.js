let slideImages = Array.from(document.querySelectorAll('.slider-container img'));

let slideElement = document.getElementById('slide-number');

let currentSlide = 1;

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

///// Create  UL and Li Elements //////////////////

let ul_MainElement = document.createElement('ul');

ul_MainElement.setAttribute('id', 'ulIndicators');

for (let index = 0; index < slideImages.length; index++) {
    let li_Element = document.createElement('li');
    li_Element.setAttribute('data-index', index + 1);
    li_Element.appendChild(document.createTextNode(index + 1));
    ul_MainElement.appendChild(li_Element);
}

document.getElementById('indicators').appendChild(ul_MainElement);

let indicatorsActive = document.getElementById('ulIndicators');

let slideBullets = Array.from(document.querySelectorAll('#indicators ul li'));

for (let index = 0; index < slideBullets.length; index++) {
    slideBullets[index].addEventListener('click', function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    })
}

checker();

function checker() {
    slideElement.textContent = `Slide #${currentSlide} of ${slideImages.length}`;

    removeAllActive();

    slideImages[currentSlide - 1].classList.add('active');
    indicatorsActive.children[currentSlide - 1].classList.add('active');


    if (currentSlide == 1)
        prevButton.classList.add('disabled');
    else
        prevButton.classList.remove('disabled');

    if (currentSlide == slideImages.length)
        nextButton.classList.add('disabled');
    else
        nextButton.classList.remove('disabled');

}

prevButton.addEventListener('click', function () {
    if (prevButton.classList.contains('disabled'))
        return false;
    else {
        currentSlide--;
        checker();
    }
})

nextButton.addEventListener('click', function () {
    if (nextButton.classList.contains('disabled'))
        return false;
    else {
        currentSlide++;
        checker();
    }
})

function removeAllActive() {
    slideImages.forEach(function (img) {
        img.classList.remove('active');
    })

    slideBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })
}
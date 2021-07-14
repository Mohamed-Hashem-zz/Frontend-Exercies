let offsetHome = $('#home').offset().top;
let offsetAbout = $('#about').offset().top;
let offsetServices = $('#services').offset().top;
let offsetWork = $('#work').offset().top;
let offsetSlider = $('#slider').offset().top;

/// Changing Color of the nav active icon and Show change navbar Color  //////////////////////

$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= offsetAbout - 50 && scroll < offsetServices - 50) {
        $('#main-nav').css('backgroundColor', 'rgb(89, 89, 173)');
        $('#btnUp').fadeIn(1000);
        $('nav ul li a').removeClass('active');
        $('#myAbout').addClass('active');
    } else if (scroll >= offsetServices - 50 && scroll < offsetSlider - 50) {
        $('#main-nav').css('backgroundColor', 'rgb(89, 89, 173)');
        $('#btnUp').fadeIn(1000);
        $('nav ul li a').removeClass('active');
        $('#myServices').addClass('active');
    } else if (scroll >= offsetSlider - 50 && scroll < offsetWork - 50) {
        $('#main-nav').css('backgroundColor', 'rgb(89, 89, 173)');
        $('#btnUp').fadeIn(1000);
        $('nav ul li a').removeClass('active');
        $('#mySlider').addClass('active');
    } else if (scroll >= offsetWork - 50) {
        $('#main-nav').css('backgroundColor', 'rgb(89, 89, 173)');
        $('#btnUp').fadeIn(1000);
        $('nav ul li a').removeClass('active');
        $('#myWork').addClass('active');
    } else {
        $('#main-nav').css('backgroundColor', 'transparent');
        $('#btnUp').fadeOut(1000);
        $('nav ul li a').removeClass('active');
        $('#myHome').addClass('active');
    }
});

//// setting the colors in slider Box  //////////////////////

let arr = ['#09c', '#ff206e', 'pink', 'green', 'orange'];
let colors = $('.slider .box-color span');

for (let i = 0; i < colors.length; i++)
    colors.eq(i).css('backgroundColor', arr[i]);

colors.click(function () {
    let color = $(this).css('backgroundColor');
    $('h1 ,h2 ,p , span').css('color', color);
    $('.slider i').css('backgroundColor', color);

    localStorage.setItem('color', color);
})

if (localStorage.getItem('color')) {
    let color = localStorage.getItem('color');
    $('h1 ,h2 ,p , span').css('color', color);
    $('.slider i').css('backgroundColor', color);
}

let width = $('.slider').innerWidth(); //// to return the width of the div

$('.slider').css('left', `-${width}px`);


$('.slider i').click(function () {
    let status = $('.slider').css('left');

    if (status == '0px')
        $('.slider').animate({
            left: `-${width}`
        }, 1000);
    else
        $('.slider').animate({
            left: `0px`
        }, 1000);
})

/////////////////////////// The button Up //////////////////////

$('#btnUp').click(function () {

    $('body,html').animate({
        scrollTop: '0'
    }, 1000);
});

/// scrolling between icons in navbar  //////////////////////

$('#main-nav ul li a[href^="#"]').click(function (e) {

    let elem = $(e.target).attr('href'); ///  e.target = this   because both of them refer to the click
    let offset_A = $(elem).offset().top;

    $('nav ul li a').removeClass('active');
    $(e.target).addClass('active');

    $('body, html').animate({
        scrollTop: offset_A
    }, 1000);
})


//////////////////////  WOW Plugin ////////////////////// 

new WOW().init(); // fire WOW plugin

$(document).ready(function () { ////////// When Html and Css Load only

    $('#spinner').fadeOut(300, function () {
        $('body').css('overflow', 'auto');
    });
});

$(window).ready(function () { ////////////  When all load (html , css , imgs , js ... )

    $('#spinner').fadeOut(2000, function () {
        $('body').css('overflow', 'auto');
    });
});

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
});


$(function () {
    $('.skitter-large').skitter();
});

var typed = new Typed('.element', {
    strings: ['I Love Development', 'I Love Graphics', 'I Love Design'],
    loop: true,
    typeSpeed: 40,
    backSpeed: 40,
    cursorChar: ' |',
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// particlesJS.load('particles-js', 'particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });

new WOW().init();
//$===jQuery
/*
========== part1 jq effects====================
hide(7000)
show(2000)
toggle(2000)

slideUp()
slideDown()
slideToggle()

fadeIn()
fadeOut()
fadeToggle()
fadeTo(2000,0.5)

animate()
*/


$("section").animate({ width: "100%" }, 2000)
$("section").animate({ height: "100vh" }, 2000, function () {
    $('h1').slideDown(2000, function () {
        for (let i = 0; i < 4; i++) {
            $('.col-md-3').eq(i).slideDown((i * 1000) + 2000, function () {
                $('h2').slideDown((i * 1000) + 2000);
            })
        }
    })
})
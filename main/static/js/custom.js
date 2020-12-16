/* header_menu */
$(".header_menu ul li").hover(function() {
    $(this).find("ul").stop().fadeToggle(300);
});


/* banner */
var bannerIndex = 1;
var timer1 = null;
var slide1 = document.getElementsByClassName("first_slide");

firstSlide(bannerIndex);

function bannerButtonSlide(n) {
    clearTimeout(timer1);
    firstSlide(bannerIndex += n);
}

function firstCurrentSlide(n) {
    clearTimeout(timer1);
    firstSlide(bannerIndex = n);
}

function firstSlide(n) {
    if (n==undefined) {n = ++bannerIndex}
    if (n > slide1.length) {bannerIndex = 1}    
    if (n < 1) {bannerIndex = slide1.length}

    for (var i = 0; i < slide1.length; i++) {
        slide1[i].style.display = "none";  
    }
    
    slide1[bannerIndex-1].style.display = "block";
    timer1 = setTimeout(firstSlide, 5000);
}


/* notice */
var noticeIndex = 0;
var slide2 = document.getElementsByClassName("second_slide");

secondSlide();

function secondSlide() {
    for (var i = 0; i < slide2.length; i++) {
        slide2[i].style.display = "none";  
    }

    noticeIndex++;
    if (noticeIndex > slide2.length) {noticeIndex = 1}    
    
    slide2[noticeIndex-1].style.display = "block"; 
    setTimeout(secondSlide, 3000);
}


/* slide */
var $slideIndex = $(".imgs_slide").find("ul");
var slideWidth = $slideIndex.children().outerWidth();
var slideLength = $slideIndex.children().length;
var slideRolling;

auto();

$slideIndex.mouseover(function() {
    clearInterval(slideRolling);
});

$slideIndex.mouseout(function() {
    auto();
});

$(".slide .prev").on("click", prev);
$(".slide .prev").mouseover(function(e) {
    clearInterval(slideRolling);
});
$(".slide .prev").mouseout(auto);

$(".slide .next").on("click", next);
$(".slide .next").mouseover(function(e) {
    clearInterval(slideRolling);
});
$(".slide .next").mouseout(auto);

function auto() {
    slideRolling = setInterval(function() {
        start();
    }, 2000);
}

function start() {
    $slideIndex.css("width", slideWidth * slideLength);
    $slideIndex.animate({"left": - slideWidth + "px"}, function() {
        $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        $(this).find("li:first").remove();
        $(this).css("left", 0);
    });
}

function prev(e) {
    $slideIndex.css("left", - slideWidth);
    $slideIndex.prepend("<li>" + $slideIndex.find("li:last").html() + "</li>");
    $slideIndex.animate({"left": "0px"}, function() {
        $(this).find("li:last").remove();
    });
}

function next(e) {
    $slideIndex.animate({"left": - slideWidth + "px"}, function() {
        $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        $(this).find("li:first").remove();
        $(this).css("left", 0);
    });
}

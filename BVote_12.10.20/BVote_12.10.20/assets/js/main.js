
// ----slideshow Late Act Table---
var actTableIndex = 1;
showActTable(actTableIndex);
function plusActTable(n) {
    showActTable(actTableIndex += n);
}
function showActTable(n) {
    var i;
    var actTables = document.getElementsByClassName("act__table");
    if (n > actTables.length) { actTableIndex = 1 }
    if (n < 1) { actTableIndex = actTables.length }
    for (i = 0; i < actTables.length; i++) {
        actTables[i].style.display = "none";
    }
    actTables[actTableIndex - 1].style.display = "block";
}

// ----slideshow Vote List

var candidateListIndex = 1;
showCandidateLists(candidateListIndex);
function currentCandidateList(n) {
    showCandidateLists(candidateListIndex = n);
}
function showCandidateLists(n) {
    var i;
    var voteLists = document.getElementsByClassName("votelist__candidate-list");
    var dots = document.getElementsByClassName("category-item"); //it seems like a changing dot
    for (i = 0; i < voteLists.length; i++) {
        voteLists[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" category-active", "");
    }
    voteLists[candidateListIndex - 1].style.display = "flex";
    dots[candidateListIndex - 1].className += " category-active";
}
// ----slideshow Sponsor
$('.sponsor-slideshow').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// ---- sticky-navbar
$(document).ready(function () {
    $(window).on('scroll', function () {
        $(".responsive__navbar").removeClass("show-block"); //loai bo responsive menu khi scroll
        $(".menu-modal").removeClass("show-block"); //loai bo modal menu khi scroll
        if ($(window).scrollTop()>50) {
            $('.header__navbar').addClass("sticky-navbar");
        } else {
            $('.header__navbar').removeClass('sticky-navbar');
        }
    })
// ------ responsive navbar
$(".header__navbar-btn").click(function(){
    $(".responsive__navbar").toggleClass("show-block");
    $(".menu-modal").toggleClass("show-block");

  });
$(".modal").click(function(){
    $(".responsive__navbar").removeClass("show-block");
    $(".menu-modal").removeClass("show-block");

  });

})



$(document).ready(function (){

    /* FEATURES */

$("#features").mouseenter(function () { 
    $(".dropdown_features").addClass("active");
    
});

$(".dropdown_features").mouseleave(function () { 
    $(".dropdown_features").removeClass("active");
});

    /* PLANS */

$("#plans").mouseenter(function(){
    $(".dropdown_plans").addClass("active");
});

$(".dropdown_plans").mouseleave(function () { 
    $(".dropdown_plans").removeClass("active");
});

    /* ABOUT */

$("#about").mouseenter(function(){
    $(".dropdown_about").addClass("active");
});

$(".dropdown_about").mouseleave(function () { 
    $(".dropdown_about").removeClass("active");
});

    /* HELP */

$("#help").mouseenter(function(){
    $(".dropdown_help").addClass("active");
});

$(".dropdown_help").mouseleave(function () { 
    $(".dropdown_help").removeClass("active");
});

/* CLICK REMOVE CLASS */

$("html").click(function(){
    $(".dropdown_features").removeClass("active");
    $(".dropdown_plans").removeClass("active");
    $(".dropdown_about").removeClass("active");
    $(".dropdown_help").removeClass("active");
});






});
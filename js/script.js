

$(".menu-icon").click( function() {
    $(".this").toggleClass("close");
    $(".hero-menu").toggleClass("open");
    $("#menu-arrow").toggleClass("close");
    $(".hero-menu-items").toggleClass("open");

});


$("#menu-arrow").click( function() {
    $(".this").toggleClass("close");
    $(".hero-menu").toggleClass("open");
    $("#menu-arrow").toggleClass("close");
    $(".hero-menu-items").toggleClass("open");

});

// HERO MENU lINKS TO SECTIONS
$("#hero-sem").click(function() {
    $('html,body').animate({
        scrollTop: $(".seminars").offset().top},
        'slow');
});

$("#hero-reg").click(function() {
    $('html,body').animate({
        scrollTop: $(".registration").offset().top},
        'slow');
});

$("#hero-scholar").click(function() {
    $('html,body').animate({
        scrollTop: $(".scholarships").offset().top},
        'slow');
});


// SIDE NAV MENU lINKS TO SECTIONS







//REGISTRATION TOGGLES

$("#tuition-button").click(function() {
    
    $(".tuition").show();
    $(".room-board").hide();
    $(".sem-fee").toggleClass("active");
})

$("#rb-button").click(function() {
    
    $(".tuition").hide();
    $(".room-board").show();
    $(".sem-fee").toggleClass("active");
})
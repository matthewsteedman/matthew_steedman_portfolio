$(document).ready(function() {
    console.log("click")
    $(window).scroll(function() {

            if (this.scrollY > 20) {
                $('.navbar').addClass('sticky');

            } else {
                $('.navbar').removeClass('sticky');
            }

        })
        // toggle menu/navbar script

    $('.menu-btn').click(function() {
        console.log("menu opened")
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
});
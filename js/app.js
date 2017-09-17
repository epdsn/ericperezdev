$(document).foundation()


$(function(){

    var scrollDuration = 500;
    var d = new Date();
    var n = d.getFullYear();

    $("#year").html(n);

    $(window).scroll(function() {
        // if ($(this).scrollTop()) {
        //     $('#toTop:hidden').stop(true, true).fadeIn();
        // } else {
        //     $('#toTop').stop(true, true).fadeOut();
        // }
        if ($(document).scrollTop() > 100) {
            $("#top-nav").addClass("scrolled");
        } else {
            $("#top-nav").removeClass("scrolled");
        }
    });


    $( "#toTop" ).click(function() {
        $('#top-nav').ScrollTo({
            duration: scrollDuration,
            durationMode: 'all'
        });
    });



    $( ".btnClickToAbout" ).click(function() {
        $('#abouteric').ScrollTo({
            duration: scrollDuration,
            durationMode: 'all'
        });
    });


    $( ".btnClickToContact" ).click(function() {
        $('#contactform').ScrollTo({
            duration: scrollDuration,
            durationMode: 'all'
        });

    });

    $( ".btnClickToWork" ).click(function() {
        $('#work').ScrollTo({
            duration: scrollDuration,
            durationMode: 'all'
        });
    });






});
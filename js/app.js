$(document).foundation()


$(function(){

    $( ".btnClickToAbout" ).click(function() {
        $('#abouteric').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
    });


    $( ".btnClickToContact" ).click(function() {
        $('#contactform').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });

    });

    $( ".btnClickToWork" ).click(function() {
        $('#work').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        });
    });

});
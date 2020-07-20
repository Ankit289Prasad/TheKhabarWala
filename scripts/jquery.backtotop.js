var coverHeight=$('#cover-image').height();

/*Check on scroll*/

$(window).scroll(function(){
    if($(window).scrollTop() > coverHeight)
        $('#backtotop').addClass('visible');
    else
        $('#backtotop').removeClass('visible');    
})

/*Check on refresh*/

if($(window).scrollTop() > coverHeight)
        $('#backtotop').addClass('visible');
    else
        $('#backtotop').removeClass('visible');    
var nav = $('.navbar.navbar-dark');
var fixedTop = 'fixed-top';
var headerHeight = $('#header').height();

/*Check on scroll*/

$(window).scroll(function(){
    if($(window).scrollTop()>headerHeight)
        nav.addClass(fixedTop);
    else
        nav.removeClass(fixedTop);    
})

/*Check on refresh*/

if($(window).scrollTop()>headerHeight)
        nav.addClass(fixedTop);
    else
        nav.removeClass(fixedTop); 
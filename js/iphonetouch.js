$(function () {

    IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);

    if (IS_IPAD || IS_IPHONE) {

        $('a').on('click touchend', function() { 
            var link = $(this).attr('href');   
            window.open(link,'_blank'); // opens in new window as requested

            return false; // prevent anchor click    
        });     
    }
});
(function() {
    var fixable = 0;

    function windowScroll() {
        if(fixable && $(window).scrollTop() > 55) {
            $('.sphinxsidebar').css('position', 'fixed');
            $('.sphinxsidebar').css('top', 0);
        } else {
            $('.sphinxsidebar').css('position', 'absolute');
            $('.sphinxsidebar').css('top', '55px');
        }
    }
    function windowResize() {
	if($(window).width() < 1024 || $(window).height() - 30 < $('.sphinxsidebarwrapper').height()) {
	    fixable = 0;
	} else {
            fixable = 1;
        }
        windowScroll();
    }

    $(window).bind('scroll', windowScroll);
    $(window).bind('resize', windowResize);
    windowResize();
})();

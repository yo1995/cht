(function($){
    var toTop = ($('#sidebar').height() - $(window).height()) + 60;
    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    if ($('#sidebar').length) {
        $(document).on('scroll', function () {
            if ($(document).width() >= 800) {
                if(($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
                    $('#toTop').fadeIn();
                    $('#toTop').css('left', $('#sidebar').offset().left);
                } else {
                    $('#toTop').fadeOut();
                }
            } else {
                $('#toTop').fadeIn();
                $('#toTop').css('right', 20);
            }
        }).on('click', '#toTop', function () {
            $('body, html').animate({ scrollTop: 0 }, 600);
        });
    }
	
	//insta
	if($('.instagram').length) {
        var bp = document.createElement("script");
		bp.src = "/cht/js/photo.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(bp, s),
		require(['/cht/js/photo.js', '/cht/libs/fancybox/jquery.fancybox.js'], function(obj) {
            obj.init();
        });
    }
	
	if($('.awards').length) {
        var bp = document.createElement("script");
		bp.src = "/cht/js/photo-a.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(bp, s),
		require(['/cht/js/photo-a.js', '/cht/libs/fancybox/jquery.fancybox.js'], function(obj) {
            obj.init();
        });
    }
})(jQuery);



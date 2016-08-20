define([],
function() {
    return {
        page: 1,
        offset: 8, //ÿ�μ���ͼƬ��
        init: function() {
            var t = this;
            $.getJSON("/cht/awards_data.json",
            function(e) {
                t.render(t.page, e),
                t.scroll(e)
            })
        },
        render: function(t, e) {
            var o = (t - 1) * this.offset,
            n = t * this.offset;
			var reg = /\.\w+$/; 
			var spc = /\s+/g;
            if (! (o >= e.length)) {
                for (var a = "",
                i = o; i < n && i < e.length; i++) a += '</div><li><div class="img-box" id="imgtxt"><a title=' + e[i].replace(reg,'').replace(spc,'&nbsp;') + ' class="img-bg" rel="example_group" href="https://raw.githubusercontent.com/yo1995/page-backup/master/awards/' + e[i] + '"><img alt="" src="https://raw.githubusercontent.com/yo1995/page-backup/master/awards_m/' + e[i] + '"/></a></div></li>';
                $(".img-box-ul").append(a);
				//$(".img-box-ul").lazyload();�˴��д�debug
				changeSize();
                $("a[rel=example_group]").fancybox({
					prevEffect	: 'elastic',
					nextEffect	: 'elastic',
					helpers	: {
						title	: {
							type: 'float'
						},
						thumbs	: {
							width	: 50,
							height	: 50,
							source  : 'https://raw.githubusercontent.com/yo1995/page-backup/master/awards_m/' + e[i],
							position: 'bottom'
						}
					}
				});
            }
        },
        scroll: function(t) {
            var e = this;
            $(window).scroll(function() {
                var o = window.pageYOffset,
                n = o + window.innerHeight,
                a = 0,
                i = $(".awards").offset().top + $(".awards").height();
                i >= o && i < n + a && e.render(++e.page, t)
            })
        }
    }
});

var changeSize = function(){	
		if($(document).width() <= 600){
			$(".img-box").css({"width":"auto", "height":"auto"});
		}else{
			var width = $(".img-box-ul").width();
			var size = Math.max(width*0.17, 115);
			$(".img-box").width(size).height("auto")
			$("ul").css("float:left");
		}
	}

var bind = function(){
	$(window).resize(function(){
		changeSize();
	});
}
define([],
function() {
    return {
        page: 1,
        offset: 6, //每次加载图片数
        init: function() {
            var t = this;
            $.getJSON("/cht/gallery_data.json",
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
                i = o; i < n && i < e.length; i++) a += '<li><div class="img-box"  id="imgtxt"><a title=' + e[i].replace(reg,'').replace(spc,'&nbsp;') + ' class="img-bg" rel="example_group" href="https://raw.githubusercontent.com/yo1995/page-backup/master/photos/' + e[i] + '"><img src="https://raw.githubusercontent.com/yo1995/page-backup/master/photos/' + e[i] + '"/></a></div></li>';
                $(".img-box-ul").append(a);
                //$(".img-box-ul").lazyload();此处有待debug
				changeSize();
                $("a[rel=example_group]").fancybox()
            }
        },
        scroll: function(t) {
            var e = this;
            $(window).scroll(function() {
                var o = window.pageYOffset,
                n = o + window.innerHeight,
                a = 0,
                i = $(".instagram").offset().top + $(".instagram").height();
                i >= o && i < n + a && e.render(++e.page, t)
            })
        }
    }
});

var changeSize = function(){	
		if($(document).width() <= 600){
			$(".img-box").css({"width":"auto", "height":"auto"});
		}else{
			var height = $(".img-box-ul").height();
			var size = Math.max(height*0.17, 115);
			$(".img-box").width(size).height(size);
			$("ul").css("float:left");
		}
	}

var bind = function(){
	$(window).resize(function(){
		changeSize();
	});
}
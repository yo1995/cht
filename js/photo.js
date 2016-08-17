define([],
function() {
    return {
        page: 1,
        offset: 20,
        init: function() {
            var t = this;
            $.getJSON("/cht/gallery/data.json",
            function(e) {
                t.render(t.page, e),
                t.scroll(e)
            })
        },
        render: function(t, e) {
            var o = (t - 1) * this.offset,
            n = t * this.offset;
            if (! (o >= e.length)) {
                for (var a = "",
                i = o; i < n && i < e.length; i++) a += '<li><div class="img-box"><a class="img-bg" rel="example_group" href="https://raw.githubusercontent.com/yo1995/page-backup/master/photos/' + e[i] + '"></a><img lazy-src="https://raw.githubusercontent.com/yo1995/page-backup/master/photos/' + e[i] + '" /></li>';
                $(".img-box-ul").append(a),
                $(".img-box-ul").lazyload(),
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
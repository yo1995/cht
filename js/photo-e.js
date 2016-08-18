var changeSize = function(){	
		if($(document).width() <= 600){
			$(".fancybox").css({"width":"auto", "height":"auto"});
			console.log('no need');
		}else{
			var width = $(".instagram").width();
			var size = Math.max(width*0.26, 157);
			$(".fancybox").css({"width":size, "height":size},'float');  //width(size).height(size);
		}
	}

var bind = function(){
	$(window).resize(function(){
		changeSize();
	});
}

define([],function () {
	changeSize();
})
require.config({
	paths: {
		jquery: 'jQuery/jquery.min' //Ver 1.7.2
	}
});

require(['jquery'], function($) {
	$("#form_main").hide().fadeIn("slow").on("click",function(){ alert("hello!") } );
});

require(["aauto"], function(aauto) {
	
});
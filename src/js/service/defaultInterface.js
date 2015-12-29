(function(){

	var $ = require("jquery"),
		URL = require("../const/url.js"),
		defaultTpl = require("../../tmpl/default.html");

	window.jQuery = $;
	require("jquery.backstretch");
	    
	module.exports =  function(){

		var init = function()
		{
			$("body").prepend(defaultTpl());
			$("#main").html($("#content"));
			$("#header").backstretch(URL.header);
			$("body").show();

			registerInteraction();
		};

		var registerInteraction = function()
		{
			$(document).on("click", ".close", function(){
				$(this).parents(".popup").hide();
			});

			$(document).on("click", ".popup", function(e){
				if (e.target === this) {
					$(this).hide();
				}
			});

			$(document).keyup(function(e) {
			     if (e.keyCode == 27) { //esc
			        $(".popup").hide();
			    }
			});
		};

		init();
	};

})();
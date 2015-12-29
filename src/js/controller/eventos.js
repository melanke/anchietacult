(function(){

	var $ = require("jquery"),
		moment = require("moment"),
		URL = require("../const/url.js"),
		defaultInterface = require("../service/defaultInterface.js");
		eventosTpl = require("../../tmpl/eventos.html"),

	module.exports = function() {

		var init = function(){
			defaultInterface();
			$("#nav-eventos").addClass("ativo");
			
			initFacebook();
		};

		var initFacebook = function()
		{
			if (document.getElementById("facebook-jssdk")) {
				return;
			}

			var fjs = document.getElementsByTagName("script")[0];

			var js = document.createElement("script");
			js.id = "facebook-jssdk";
			js.src = "//connect.facebook.net/en_US/sdk.js";

			fjs.parentNode.insertBefore(js, fjs);
		};

		window.fbAsyncInit = function() {
		    FB.init({
		    	appId      : '1267748606575986',
		    	xfbml      : true,
		    	version    : 'v2.5'
		    });

		    FB.api('/AnchietaCult/events', 'GET', {
		    	access_token: "1267748606575986|BokDhdl2F3Tzdapg10VsRUJTss0",
		    	fields: "description,end_time,name,start_time,id,cover"
		    }, function(resp){
		    	renderConteudo(resp);
		    });
	  	};

		var renderConteudo = function(conteudo)
		{
			conteudo.moment = moment;
			$("#content").html(eventosTpl(conteudo));
		};

		init();

	};

})();
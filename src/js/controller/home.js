(function(){

	var $ = require("jquery"),
		URL = require("../const/url.js"),
		defaultInterface = require("../service/defaultInterface.js"),
		gallery = require("../service/gallery.js"),
		espacoTpl = require("../../tmpl/espaco.html");


	module.exports = function() {

		var init = function(){
			defaultInterface();
			$("#nav-espaco").addClass("ativo");
			
			popularConteudo();
		};

		var popularConteudo = function()
		{
			$.getJSON(URL.ESPACO, function(resp){
				$("#content").html(espacoTpl(resp));
				initGallery();
			});
		};

		var initGallery = function(){
			gallery(".gallery");
		};

		init();

	};

})();
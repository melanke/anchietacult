(function(){

	var $ = require("jquery"),
		URL = require("../const/url.js"),
		defaultInterface = require("../service/defaultInterface.js"),
		cardapioTpl = require("../../tmpl/cardapio.html"),
		format = require("../service/format.js");

	module.exports = function() {

		var init = function(){
			defaultInterface();
			$("#nav-cardapio").addClass("ativo");
			
			popularConteudo();
		};

		var popularConteudo = function()
		{
		    $.getJSON(URL.CARDAPIO, function(resp){
				renderConteudo(resp);
			});
		};

		var renderConteudo = function(conteudo)
		{
			conteudo.format = format;
			$("#content").html(cardapioTpl(conteudo));
		};

		init();

	};

})();
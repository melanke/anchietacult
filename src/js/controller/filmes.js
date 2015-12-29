(function(){

	var $ = require("jquery"),
		URL = require("../const/url.js"),
		defaultInterface = require("../service/defaultInterface.js");

	require("datatables");

	module.exports = function() {

		var init = function(){
			defaultInterface();
			$("#nav-filmes").addClass("ativo");
			
			popularConteudo();
			registerInteraction();
		};

		var popularConteudo = function()
		{
		    $('#filmes').DataTable({
		        "ajax": URL.FILMES,
		        "columns": [
		            { "data": "ID" },
		            { "data": "FILME" },
		            { "data": "AUTOR" },
		            { "data": "ATORES" },
		            { "data": "CATEGORIA" }
		        ],
		        "order": [[ 1, 'asc' ]],
		        language: {
				    "sEmptyTable": "Nenhum filme encontrado",
				    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ filmes",
				    "sInfoEmpty": "Mostrando 0 até 0 de 0 filmes",
				    "sInfoFiltered": "(Filtrados de _MAX_ filmes)",
				    "sInfoPostFix": "",
				    "sInfoThousands": ".",
				    "sLengthMenu": "_MENU_ filmes por página",
				    "sLoadingRecords": "Carregando...",
				    "sProcessing": "Processando...",
				    "sZeroRecords": "Nenhum filme encontrado",
				    "sSearch": "Pesquisar",
				    "oPaginate": {
				        "sNext": "Próximo",
				        "sPrevious": "Anterior",
				        "sFirst": "Primeiro",
				        "sLast": "Último"
				    },
				    "oAria": {
				        "sSortAscending": ": Ordenar colunas de forma ascendente",
				        "sSortDescending": ": Ordenar colunas de forma descendente"
				    }
				}
		    });
		};

		var popularImg = function(titulo, autor)
		{
			$.getJSON("https://www.googleapis.com/customsearch/v1?key=AIzaSyBY87_Tn7WuBNlBWW3xlJN5dzLWZY-wvvM&cx=005935040964297426255:ovtuelyi8kk", {
				q: titulo+" "+autor+" filme",
				searchType: "image",
				cx: "005935040964297426255%3Aovtuelyi8kk"
			}, function(data){
				var imgV = $(".popup img");

				if (data && data.items) {
					imgV.attr("src", data.items[0].link);
					imgV.show();
					$("#semimagem").hide();
				} else {
					imgV.hide();
					$("#semimagem").show();
				}
				$(".popup").show();
	        });
		};

		var registerInteraction = function()
		{
			$(document).on("click", "tbody tr", function(){
				var colunas = $(this).find("td");
				popularImg(colunas.eq(1).html(), colunas.eq(2).html());
			});
		};

		init();

	};

})();
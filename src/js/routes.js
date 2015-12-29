(function(){
    var url = require("url"),
        URL = require("./const/url");
    
    var path = url.parse(location.href).path;
    
    if (!path.length || path.endsWith(URL.home)) {
        require("./controller/home")();
    } else if (path.endsWith(URL.filmes)) {
        require("./controller/filmes")();
    } else if (path.endsWith(URL.cardapio)) {
        require("./controller/cardapio")();
    } else if (path.endsWith(URL.eventos)) {
        require("./controller/eventos")();
    }
    
})();

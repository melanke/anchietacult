module.exports = {
	preco: function(preco) {
		if (!preco) {
			return null;
		}
		
        return "R$" + preco.toFixed(2).replace(".", ",").replace(/\d(?=(\d{3})+\,)/g, '$&.');
    }
};
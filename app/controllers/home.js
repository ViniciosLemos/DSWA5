module.exports = function () {
	var controller = {};
	controller.index = function(req, res) {
		//Retorna a página index.ejs
		res.render('index', {nome: 'ExpressJS',img: "./public/Logo.jpg"});
	};
	return controller;
}
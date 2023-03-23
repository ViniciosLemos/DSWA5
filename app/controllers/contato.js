var contatos = [
  {_id: 1, nome: 'Nome da pessoa 1', email: 'emaildapes1@gmail.com'},
  {_id: 2, nome: 'Nome da pessoa 2', email: 'emaildapes2@gmail.com'},
  {_id: 3, nome: 'Nome da pessoa 3', email: 'emaildapes3@gmail.com'}
]

module.exports = function(){
  var controller = {};
	controller.listaContatos = function(req,res){
    res.json(contatos);
  };
  controller.obtemContato = function(req, res){
    console.log('Selecinou o contato: ' + req.params.id);
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];
    contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
  };
  return controller;
};
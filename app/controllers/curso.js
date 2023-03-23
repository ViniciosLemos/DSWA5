var cursos = [
  {_id: 1, curso: 'ADS', coordenador: 'emailddocod1@gmail.com'},
  {_id: 2, curso: 'ADM', coordenador: 'emailddocod2@gmail.com'},
  {_id: 3, curso: 'Letras', coordenador: 'emailddocod3@gmail.com'}
]

module.exports = function(){
  var controller = {};
	controller.listaCursos = function(req,res){
    res.json(cursos);
  };
  controller.obtemCurso = function(req, res){
    console.log('Selecinou o curso: ' + req.params.id);
    var idCurso = req.params.id;
    var curso = cursos.filter(function(curso){
      return curso._id == idCurso;
    })[0];
    curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
  };
  return controller;
};
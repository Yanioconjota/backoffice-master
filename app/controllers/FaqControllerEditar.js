(function(){
  "use strict";
  angular
  .module('backoffice')
  .controller('faqControllerEditar',function($location, faqService){
    var self = this;
    self.guardar = false;
    self.original = [
      {id: "01", pregunta : "Pregunta 1", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tenetur ducimus hic aliquid perferendis. Nostrum omnis a ad, totam reprehenderit qui tenetur. Animi autem reprehenderit, saepe quis in tempore ab."},
      {id: "02", pregunta : "Pregunta 2", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, doloremque eos dolor fugit voluptatibus aliquid ipsam facere delectus ipsa commodi praesentium modi aut placeat aliquam, nesciunt sed dolorem asperiores, vel!"},
      {id: "03", pregunta : "Pregunta 3", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum animi sapiente voluptatem accusamus. Dolor quod aspernatur cupiditate molestiae maxime, sequi saepe delectus libero voluptate consequatur voluptatum aliquid. Vero, placeat, nam!"},
      {id: "04", pregunta : "Pregunta 4", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusantium nobis placeat quidem ex, vel, enim atque. Iusto, ex reiciendis vitae numquam rem officiis velit maxime, ut totam temporibus nihil."}
    ];

    //self.newItem = { id: 0, pregunta: ""};
    console.log(self.original);
    self.copia = angular.copy(self.original);

    self.editarPregunta = function(){
      self.guardar = true;
      self.copia = self.original;
    }

    self.guardarPregunta = function(){
      faqService.update(self.copia,function(respuesta){
        if(respuesta){
          console.log(self.copia.pregunta1);
        }
      });
      self.guardar = false;
    }


    self.errorMensaje = false;

      self.agregarPregunta = function(newItem){

      console.log(newItem);
      //
      if (newItem == undefined || newItem.pregunta == "" ) {
        self.errorMensaje = true;
      } else {
        self.errorMensaje = false;
        self.original.push({id:self.original.length + 1,pregunta:self.newItem.pregunta});
      }
  		//vm.array.push(angular.copy(obj));
  	}

  });
})();

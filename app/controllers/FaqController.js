(function(){
  "use strict";
  angular
  .module('backoffice')
  .controller('faqController',function($location, faqService){
    var self = this;
    self.guardar = false;
    self.original = [
      {id: "01", topico : "Topico 1"},
      {id: "02", topico : "Topico 2"},
      {id: "03", topico : "Topico 3"},
      {id: "04", topico : "Topico 4"}
    ];

    //self.newItem = { id: 0, topico: ""};
    console.log(self.original);
    self.copia = angular.copy(self.original);

    self.editarTitulo = function(){
      self.guardar = true;
      self.copia = self.original;
    }

    self.guardarTitulo = function(){
      faqService.update(self.copia,function(respuesta){
        if(respuesta){
          console.log(self.copia.topico1);
        }
      });
      self.guardar = false;
    }


    self.errorMensaje = false;

      self.agregarTopico = function(newItem){

      console.log(newItem);
      //
      if (newItem == undefined || newItem.topico == "" ) {
        self.errorMensaje = true;
      } else {
        self.errorMensaje = false;
        self.original.push({id:self.original.length + 1,topico:self.newItem.topico});
      }
  		//vm.array.push(angular.copy(obj));
  	}
    // if(obj === undefined || self.newItem.topico.length != 0){
    //   console.log(obj,self.newItem.topico.length);
    //
    //   self.original.push({id:self.original.length + 1,topico:self.newItem.topico});
    // }

  });
})();

(function(){
  
  "use strict";
  
  angular
  
    .module('backoffice')
  
    .controller('EspecialidadController', function( EspecialidadService , CatalogoService, $location) {

        var self = this;
        
        self.especialidad = {};
        self.tmpEspecialidad = {};
        self.limiteTurnosDiario = false;
        self.limiteTurnosSemanal = false;
        self.limiteTurnosMensual = false;
        
        self.publish = function(){
          EspecialidadService.publish( { 
              id : self.especialidad.id, 
              habilitaBusquedaOl : ! self.especialidad.habilitaBusquedaOl 
          } , function( response ) {
              alert( response ? "ok" : "error");
          } ) ;
        }
        
        self.save = function ( key ) {
          EspecialidadService.save( self.tmpEspecialidad, function( response ) {
              self[ key ] = false;
              if( response ){
                self.especialidad = self.tmpEspecialidad
              }
          } ) ;
        }
        
        self.cancel = function ( key ) {
          self[ key ] = false;
          self.tmpEspecialidad[ key ] = especialidad[ key ]
        }
        
        return function(){
            
          var id = EspecialidadService.get("id_speciality") ;  
          ( id )
            ? EspecialidadService
                .getOne( id, function( data ){
                  self.especialidad = data.especialidad;
                  self.tmpEspecialidad = angular.copy( data.especialidad );
                  console.log( self.especialidad )
                } )
            : $location.path("/catalogo")

        }()
    } );
})()

(function(){
  
  "use strict";
  
  angular
  
    .module('backoffice')
  
    .controller('CatalogoController', function( $scope, StoreService, CatalogoService, EspecialidadService, FilialService, $location, settings ) {
      
        var getCatalog = function(){
          CatalogoService.getAll( {
            filialId : null,
            busqueda : null,
            pageNumber : self.page.pageNumber,
            pageSize : self.page.pageSize
          }, function( response ){
            self.filialSpecialities = response.result;
            self.page = response.page;
          } )
        }
        
        var placeholder = "Ej. Filial 60"; 
        
        var self = this; 
          
        self.page = {
          pageSize : 0,
          pageNumber : 0,
          totalResults : 0,
          totalResultsCached : false
        }
        
        // busqueda de filial
        self.search = "";
        self.showAdd = false;
        self.searchResult = [];
        self.placeholder = placeholder;
        
        // tabla de resultados
        self.totalPages = [];
        self.filialSpecialities = [];
        
        self.resetPlaceholder = function(){
          self.placeholder = placeholder;    
        }
        
        self.goToPage = function(numberPage){
          self.page.pageNumber = numberPage;
          getCatalog()
        }
        
        self.setSuggestion = function( suggestion ){
          FilialService.set( "update", false );
          FilialService.set( "filial", suggestion );
          self.placeholder = suggestion.descFilial + ' ' + suggestion.codFilial
          self.search = "";
          self.showAdd = true;
          self.searchResult = [];
        }
        
        self.cleanSearch = function(){
          self.showAdd = false;
          self.searchResult = [];
          self.search = "";
        }
        
        self.removeFilial = function(id){
          StoreService.modalConfirm("eliminar.filial", function () {
             FilialService
              .remove( id, function( response ){
                alert( ( response ) ? "ok" : "error")
              } )
          } )
        }
      
        self.updateFilial = function( filial ){            
          FilialService.set( "update", true );
          FilialService.set( "filial", filial )
          $location.path("/editar_filial")
        }
      
        self.addFilial = function( filial ){            
          $location.path("/agregar_filial")
        }
        
        self.removeSpeciality = function( id ){
          StoreService.modalConfirm("eliminar.especialidad", function () {
            EspecialidadService
               .remove( id, function( response ){
                 alert( response ? "ok" : "error")
               } )
          } )
        }
        
        self.updateSpeciality = function( id ){
          EspecialidadService.set( "id_speciality", id )
          $location.path("/editar_especialidad")
        }
      
        self.unPublishAll = function(){
          var ids = [];
          for( var i = 0; i < self.filialSpecialities.length; i++ ){ 
            ids.push( { id : self.filialSpecialities[i].id } )
          }
          CatalogoService.publishAll( ids , function( response ) {
              alert( response ? "ok" : "error");
          } ) ;
        }
        
        return function(){
          getCatalog();
          StoreService.keyUpSearch( {
            scope : $scope,
            watched : "cCtrl.search",
            data : "{ busqueda : %s, pageNumber : "+self.pageNumber+", pageSize : "+self.pageSize+" }",
            request : CatalogoService.search,
            callback : function( data ){
              self.searchResult = data;
            } } )
        }()
    } );
})()

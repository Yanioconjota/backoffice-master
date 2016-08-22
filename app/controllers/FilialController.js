(function(){
  
  "use strict";
  
  angular
  
    .module('backoffice')
  
    .controller('FilialController', function( StoreService, EspecialidadService, FilialService, $location, $scope, settings ) {
        
        var filterItems = function( items ){
          $scope.$watch( 'fCtrl.filter', function ( val ) {
            self.filteredItems = ( val != "" ) 
                                    ? items.filter( function( item ){
                                        var str = item.descEspecialidad.toLowerCase(),
                                            pat = new RegExp( "^" + val.toLowerCase() );
                                        return pat.test( str ) 
                                      } )
                                    : items                        
          } )
        }
        
        var getItemsSelected = function( items ){
          var a = [];
          angular.forEach( items , function( item ){
            if ( item.selected ) {
              a.push(item);
            }
          } )
          return a;
        }
        
        var self = this; 
        
        self.filial = {};
        self.filter = "";
        self.filteredItems = [];
        self.selectAll = false;
        self.filterTemplate = settings.base+'/templates/especialidad.filter.html';

        self.publish = function(){
          FilialService.publish( { 
              id : self.filial.id, 
              habilitaBusquedaOl : ! self.filial.habilitaBusquedaOl 
          } , function( response ) {
              alert( response ? "ok" : "error");
          } ) ;
        }

        self.checkAll = function(){
          self.selectAll = ! self.selectAll;
          angular.forEach( self.filteredItems , function( item ){
            item.selected = self.selectAll
          } )                       
        }

        self.save = function(){
          
          if( self.isUpdate ){
            var filial = angular.copy( self.filial );
            filial.especialidades = getItemsSelected( self.filteredItems ) ;
            FilialService.update( filial, function( response ) {
              self[ key ] = false;
              if( response ){
                self.especialidad = self.filial
              }
            } )
          }
          
          else {
              var data = {
                descFilial: "Metropolitana",
                habilitaBusquedaOl: true,
                audEstado: "Lorem ipsum",
                audFechaCambio: "01-01-2016",
                especialidades: getItemsSelected( self.filteredItems )
              }
              if( data.especialidades.length > 0 ){
                FilialService.save( data, function() {
                } )
              }
          }
        }
      
        return function(){
          
          self.isUpdate = FilialService.get( "update" );  
          self.filial = FilialService.get("filial");
          
          if( ! self.filial ){
            $location.path("/catalogo")
            return false;
          } 
          
          else if( self.isUpdate ){
            filterItems( self.filial.especialidades )
          } 
          
          else {
            EspecialidadService.getAll( {}, function( especialidades ){
              filterItems( especialidades )
            } )
          } 
          
        }()
    } );
})()

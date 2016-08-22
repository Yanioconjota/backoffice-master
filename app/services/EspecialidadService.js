(function() {

    'use strict';

    angular
        
        .module('backoffice')
        
        .service('EspecialidadService', function( $http, StoreService, settings ) {
          
            var self = this, _private = {};
            
            self.set = function( key, value ){
              _private[ key ] = value
            }
            
            self.get = function( key ){
              return _private[ key ]
            }  
            
            self.remove = function( id, callback ){
              return StoreService
                                  .request( {
                                              url : "especialidad/delete.do",
                                              method : "POST",
                                              data : { id : id }
                                            } )
                                  .then( function ( response ) {
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert( "error")
                                  })

            }  
                      
            self.save = function( data, callback ){
              return StoreService
                                  .request( {
                                              url : "especialidad/save.do",
                                              method : "POST",
                                              data : data
                                            } )
                                  .then( function( response ){
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert("error")
                                  } )
            }
            
            self.publish = function( data, callback ) {
              return StoreService
                                  .request( {
                                              url : "/especialidad/publica.do",
                                              method : "POST",
                                              data : { 
                                                catalogo : data 
                                              }
                                            } )
                                  .then( function( response ){
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert("error")
                                  } ) 
            }  
            
            self.getOne = function( id, callback ) {
              return StoreService
                                  .request( {
                                              url : settings.base + "/server/catalogo.especialidad.json",
                                              /*
                                              method : "POST",
                                              data : { 
                                                id : id 
                                              }
                                              */
                                            } )
                                  .then( function( response ){
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert("error")
                                  } ) 
            }  
            
            self.getAll = function( data, callback ) {
              return StoreService
                                  .request( {
                                              url : settings.base + "/server/agregar.filial.geAll.json",
                                              /*
                                              method : "POST",
                                              data : data
                                              */
                                            } )
                                  .then( function( response ){
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert("error")
                                  } ) 
            }  
    
        });

})();

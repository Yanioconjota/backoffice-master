(function() {

    'use strict';

    angular
        
        .module('backoffice')
        
        .service('FilialService', function( $http, StoreService ) {
          
            var self = this, _private = {};
            
            self.set = function( key, value ){
              _private[ key ] = value
            }
            
            self.get = function( key ){
              return _private[ key ]
            }  
            
            self.publish = function( data, callback ) {
              return StoreService
                                  .request( {
                                              url : "/catalogo/publica.do",
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
            
            self.update = function( data, callback ){
              return StoreService
                                  .request( {
                                              url : "catalogo/save.do",
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
            
            self.save = function( data, callback ){
              return StoreService
                                  .request( {
                                              url : "catalogo/save.do",
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
            
            self.remove = function( id, callback ) {
              return StoreService
                                  .request( {
                                              url : "/catalogo/delete.do",
                                              method : "POST",
                                              data : { 
                                                        id :  id
                                                      }
                                            } )
                                  .then( function ( response ) {
                                    callback( response.data )
                                   } )
                                 ["catch"]( function(){
                                   alert( "error")
                                 } )
 
            }
    
        });

})();

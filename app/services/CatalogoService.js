(function() {

    'use strict';

    angular
        
        .module('backoffice')
        
        .service('CatalogoService', function( StoreService , settings ) {
          
            var self = this;
            
            self.publishAll = function( ids, callback ) {
              return StoreService
                                  .request( {
                                              url : "/catalogo/publicaTodos.do",
                                              method : "POST",
                                              data : { 
                                                publicarCatalogos :  { 
                                                      catalogos : ids, 
                                                      habilitaBusquedaOl : false 
                                                  } 
                                              }
                                            } )
                                  .then( function( response ){
                                    callback( response.data )
                                  } )
                                  ["catch"]( function(){
                                    alert("error")
                                  } ) 
            }

            self.getAll = function( filter, callback ) {
              return StoreService
                                    .request( {
                                      url : settings.base + "/server/catalogo.all.json"
                                      /*
                                      method : "POST",
                                      data : {
                                        filter : filter
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

            self.search = function( filter, callback ) {
              return StoreService
                                    .request( {
                                      url : settings.base + "/server/catalogo.filial.string.json"
                                      /*
                                      method : "POST",
                                      data : {
                                        filter : filter
                                      }
                                      */
                                    } )
                                    .then( function ( response ) {
                                      callback ( response.data )
                                    } )
                                    ["catch"]( function(){
                                      callback ( false );
                                      alert("error")
                                    } ) 
            }
            
      } );
})();

(function() {

    'use strict';

    angular

        .module('backoffice')

        .service('StoreService', function( $http, ngDialog, settings ) {

            var self = this,
                _private = {
                              keyUpSearch : {}
                          };

            self.keyUpSearch = function( options ){
              if(!_private.keyUpSearch[options.watched])_private.keyUpSearch[options.watched]={};
              _private.keyUpSearch[options.watched].counter = 0;
              _private.keyUpSearch[options.watched].submitted = false;
              options.scope.$watch( options.watched, function ( string ) {
                _private.keyUpSearch[options.watched].counter = ( string == "" ) ? 0 : _private.keyUpSearch[options.watched].counter + 1;
                if( _private.keyUpSearch[options.watched].counter > 3
                    && ! _private.keyUpSearch[options.watched].submitted
                ) {
                  _private.keyUpSearch[options.watched].submitted = true;
                  options.request( options.data.replace(/\%s/, string), function ( data ) {
                    _private.keyUpSearch[options.watched].submitted = false;
                    options.callback( data )
                  } )
                }
              } )
            }

            self.request = function( data ){
              return $http( data )
            }

            self.modalConfirm = function( name, callback ){
              ngDialog
                .openConfirm( {
                    template:  settings.base + "/templates/modals/"+name+".html",
                    className: "ngdialog-theme-default"
                } )
                .then( callback )
            }

            self.getTyc = function(callback){
              return self
                .request( {
                            url : settings.base + "/server/tyc.json"
                            //method : "POST"
                          } )
                .then( function( response ){
                  callback( response.data )
                } )
                ["catch"]( function(){
                  callback(false)
                } )
            }

        });

})();

( function(){
  
  "use strict";
  
  angular
    
    .module('backoffice')
    
    .controller('SidebarController', function(StoreService) {

        var self = this;
        
  			StoreService
          .request( { url : "/app/server/sidebar.json"} )
          .then( function( response ) {
    				self.menu = response.data;
    			} );

    } );
})()

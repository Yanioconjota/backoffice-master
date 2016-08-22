(function(){
  "use strict";
  angular
  .module('backoffice')
  .service('faqService',function($http, StoreService){
    var self = this;
    self.update = function( data, callback ){
      callback(true);
      //return StoreService
      // .request({
      //   url : "catalogo/save.do",
      //   method : "POST",
      //   data : {
      //     catalogo : data
      //   }
      // })
      // .then( function( response ){
      //   callback( response.data )
      // } )
      // ["catch"]( function(){
      //   alert("error")
      // })
    }
  });
})()

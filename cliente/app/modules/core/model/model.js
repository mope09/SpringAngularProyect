'use strict';
angular.module('Model').factory('model', function($resource){
  return function(model){
    return $resource('http://localhost:8090/' + model + '/:id', 
      {
        id:"@_id"
      },{
        update: { 
          method:"PUT",
          params: {id: "@id"} 
        }
      }
    );
  };
});

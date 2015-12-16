angular.module('prueba').config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/prueba', {
		templateUrl: 'app/modules/prueba/view/lista.html',
		controller: 'PruebaCtrl',
		resolve: {
        prueba_routes: function(Prueba_model, $location){
				return Prueba_model.query(function(data){
					return data;
				});
			}
		}
	}).
	when('/nuevo', {
		templateUrl: 'app/modules/prueba/view/nuevo.html',
		controller: 'NuevoCtrl',		       
	}).
	when('/editar/:id', {
		templateUrl: 'app/modules/prueba/view/editar.html',
		controller: 'EditarCtrl',	
		resolve: {
        empleado_seleccionado: function(Prueba_model, $location, $route){
				return Prueba_model.put($route.current.params._id).$promise.then(function(empleado_seleccionado) {
	    			return empleado_seleccionado;
	    });

			}
		}	       
	}).
	otherwise({
		redirectTo: '/'
	})
}]);



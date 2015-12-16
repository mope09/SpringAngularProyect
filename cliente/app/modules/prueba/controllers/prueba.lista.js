angular.module('prueba').controller('PruebaCtrl', function ( $scope, Prueba_model, prueba_routes, $route, $location, $timeout, NgTableParams){
	
	$scope.pruebas = prueba_routes;
	var data = prueba_routes;

	var self = this;
	var data = prueba_routes;
	self.tableParams = new NgTableParams({}, { dataset: data});

	$scope.editar_empleado = function(empleado){
		  console.log(empleado, 'EMPLEADO');		  
		  $location.path('editar/' + empleado.id);
	};
});

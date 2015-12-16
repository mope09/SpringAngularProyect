angular.module('prueba').controller('NuevoCtrl', function ( $scope, Prueba_model, $route, $location){
	
	$scope.ingresar_nuevo = function(){
		console.log($scope.empleado);
		Prueba_model.save($scope.empleado).$promise.then(function(empleado){
			$scope.empleado = empleado;
			$location.path('/prueba');
		});				
	};
	
});

angular.module('prueba').controller('EditarCtrl', function ( $scope, empleado_seleccionado, $route, $location){
	
	//$scope.empleado_seleccionado = empleado_seleccionado;
	console.log(empleado_seleccionado, 'EMPLEADO SELECCIONADO');
	$scope.actualizar_empleado = function(){
		var datos_a_actualizar = {data: $scope.empleado_seleccionado};  
		console.log($scope.empleado);
		/*Prueba_model.update($scope.empleado_seleccionado, datos_a_actualizar).$promise.then(function(empleado_seleccionado){
		$location.path('/prueba');
		});*/	

			
	};
	
});

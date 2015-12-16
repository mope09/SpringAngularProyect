var app = angular.module('ClientApp', [
  'ngRoute',
  'ngResource',
  'ngTable', 
  'Core',
  'prueba'
  ])

  .config(['$locationProvider' ,
    function($locationProvider) {
      $locationProvider.hashPrefix('!');
      
    }
  ]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['ClientApp']);
});

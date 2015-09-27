'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View1Ctrl', [function() {
      var vm = this;

      function init() {
        vm.message = '';
      }

      vm.showMessageAsNotification = function() {
        vm.notification = vm.message;
      }

      init();
}]);
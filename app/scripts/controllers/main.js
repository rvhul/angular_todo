/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

 'use strict';

 angular.module('mytodoApp')
   .controller('MainCtrl', function ($scope) {
     $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Activis'];
     $scope.addToDo = funciton() {
       $scope.todos.push($scope.todo);
       $scope.todo = '';
     };
   });

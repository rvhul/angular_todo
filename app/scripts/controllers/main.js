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
     $scope.addToDo = function() {
       $scope.todos.push($scope.todo);
       $scope.todo = '';
     };
     $scope.removeToDo = function (index) {
       $scope.todos.splice(index, 1);
     };
   });

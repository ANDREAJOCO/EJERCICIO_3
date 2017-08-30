/**
 * Module setter
 * @type type
 */
angular.module('mpApp.controllers', ['mpApp.services'])


.controller('mainCtrl', function($scope,$log,$http) {
  
    var pokeurl = 'http://pokeapi.co/api/v2/pokemon/';
    $scope.pokemon = '';
    $scope.searchPokemon = function() {

      $http({
        method: 'GET',
        url: pokeurl + $scope.pokemon.toLowerCase()

      }).then(function sucess(response) {
        $scope.pokemon = response.data;

     
      }).then(function error(response) {
        $scope.error = 'No existe pokemon!!!'

        
      });
    };
  })
;



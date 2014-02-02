'use strict';

angular.module('App')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


        var games = [];

        var gamesUrl = 'https://loddenthinks.firebaseio.com/';
        var gamesRef = new Firebase(gamesUrl);
        angularFire(gamesRef, $scope, "games");

        $scope.addGame = function(name){
            var game = {'name': name};
            games.splice(0,0,game);
        }
  });

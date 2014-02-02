'use strict';

angular.module('App')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


        var gamesUrl = 'https://loddenthinks.firebaseio.com/';
        var gamesRef = new Firebase(gamesUrl);
        angularFire(gamesRef, $scope, "gameRoom");

        $scope.addGame = function(name){
            var game = {'name': name};
            $scope.gameRoom.games.splice($scope.gameRoom.games.length,0,game);
        }
  });

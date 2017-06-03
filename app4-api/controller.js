angular
  .module('Starship')
  .controller('homeCtrl', function($scope, starshipService) {
    $scope.starships = [];
    $scope.characters = [];
    //
    $scope.getCharacters = function() {
      starshipService
        .getCharacters()
        .then(function(characters) {
          $scope.characters = characters.data.results;
        })
        .catch(function(err) {
          console.error('Something Broke: ' + err);
        });
    };
    //
    $scope.getStarships = function(starshipUrlList) {
      starshipService
        .getStarships(starshipUrlList)
        .then(function(starships) {
          $scope.starships = starships;
        })
        .catch(function(err) {
          console.error(err);
        });
    };
    //
    $scope.getCharacters();
  });

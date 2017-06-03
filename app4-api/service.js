angular.module('Starship').service('starshipService', function($q, $http) {
  var baseUrl = 'http://swapi.co/api/';
  var nextPage = '';

  this.getStarships = function(starshipUrlList) {
    var deffered = $q.defer();
    var starships = [];
    starshipUrlList.forEach(function(url) {
      $http.get(url).then(function(starship) {
        starships.push(starship.data);
        if (starships.length === starshipUrlList.length) {
          console.log(starships);
          deffered.resolve(starships);
        }
      });
    });
    // oop through list
    //make a request for each item in list
    //  resolve promist only when we have everything
    return deffered.promise;
  };

  this.getCharacters = function() {
    if (nextPage) {
      return $http.get(nextPage).then(saveNextPage);
    }

    return $http.get(baseUrl + 'people').then(saveNextPage);
  };

  function saveNextPage(result) {
    nextPage = result.data.next;
    return result;
  }
});

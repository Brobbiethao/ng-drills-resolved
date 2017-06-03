angular.module('app').controller('mainCtrl', function($scope, mainSrv) {
  console.log(mainSrv.people);
  $scope.people = mainSrv.people;
});

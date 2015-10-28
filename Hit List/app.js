var app = angular.module("MyApp", []);

app.controller("HitList", ["$scope", "$http", function ($scope, $http) {

    $http.get('http://mean.codingcamp.us:6543/hitlist.json').then(function(response) {
        $scope.people = response.data;
        $scope.img = response.data.image;
    });

}]);
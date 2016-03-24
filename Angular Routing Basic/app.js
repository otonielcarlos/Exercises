var app = angular.module("MyApp", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/main.html",
        controller: "MainController"
    }).when("/second", {
        templateUrl: "templates/second.html",
        controller: "SecondController"

    })
});
app.controller("MainController", ["$scope", function ($scope) {
    $scope.name = 'Jim';

}]);

app.controller("SecondController", ["$scope", function ($scope) {
    $scope.name = 'Jane';

}]);
var app = angular.module("WishList", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/tech.html",
        controller: "MainController"
    }).when("/other", {
        templateUrl: "templates/other.html",
        controller: "SecondController"

    })
});
app.controller("MainController", ["$scope", function ($scope) {


    $scope.tech = [
        {
            image: "/images/e38yg-sbbk-sel-v1-201509_GEO_US.jpeg",
            name: "Apple Watch",
            price: "$1049.00"
    },
        {
            image: "images/MacBook_Pro_Retina_2014_review.jpg",
            name: "MacBook Pro",
            price: "$2499.00"
    }];
}]);

app.controller("SecondController", ["$scope", function ($scope) {

}]);

app.directive("wishList", function () {

    return {
        restrict: "E",
        templateUrl: "templates/tech.html"
    }
});
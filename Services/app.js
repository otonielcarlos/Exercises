var app = angular.module("Services", []);



app.controller("MainController", ["$scope", "CartoonService", function($scope, CartoonService) {

    $scope.cartoons = CartoonService.listOfCartoons;
    $scope.name = '';
    $scope.url = '';
    $scope.desc = '';
    
    
    $scope.updateCartoonService = function(name,url,desc) {
        
        CartoonService.addCartoon(name,url,desc);
        $scope.cartoons = CartoonService.listOfCartoons;
        $scope.name = '';
        $scope.url = '';
        $scope.desc = '';    }


}]);
var app = angular.module('Mighty', [])

app.controller("MainController", ["$scope", "blueService", "redService", function ($scope, blueService, redService) {

    $scope.redV = redService.red;
    $scope.blueV = blueService.blue;

    $scope.addBlue = function () {
        blueService.blueServiceUp();
        redService.redServiceDown();
        redService.resetRed();
        $scope.redV = redService.red;
        $scope.blueV = blueService.blue;
        

    }
    $scope.addRed = function () {
        redService.redServiceUp();
        blueService.blueServiceDown();
        blueService.resetBlue();
        $scope.redV = redService.red;
        $scope.blueV = blueService.blue;
    }
}]);